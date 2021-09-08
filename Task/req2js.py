import zipfile
import json
import appex
import clipboard
import console
from urllib.parse import urlencode


def extract_har(file):

  with open(file, 'r', encoding='utf-8') as f:
    d = json.load(f)['log']['entries'][0]['request']
    
  url = d['url']
  headers = {i['name']: i['value'] for i in d['headers']}
  params = d.get('postData',{}).get('params', '')
  if params:
    body = {i['name']: i.get('value', '') for i in params}
    body = urlencode(body)
    del headers['Content-Type'] 
  else:
    body = d.get('postData', {}).get('text', '')    
  method = d['method'].lower()
  
  return url, body, headers, method

def extract_qx(path):
  
  path = path +'/0'
  with open(path+'/basic') as f:
    url = f.read()
  with open(path+'/request_body') as f:
    body = f.read()
  with open(path+'/request_headers') as f:
    temp = f.read()
    method = temp.split()[0].lower()
    headers = {k:v for k, v in [i.split(': ',1) for i in temp.split('\n')[1:] if i]}
  
  return url, body, headers, method
      
  
def extract_surge(file):
  
  with zipfile.ZipFile(file, 'r') as z:
    with z.open('model.json') as f:
      d = json.load(f)
    if 'request.dump' in z.namelist():
      with z.open('request.dump') as f:
        body = str(f.read(), encoding='utf-8')
        d['requestBody'] = body
  
  url = d['URL']
  body = d.get('requestBody', '')
  method = d['method'].lower()
  headers = {k:v for k, v in [i.split(': ',1) for i in d['requestHeader'].split('\r\n')[1:] if i]}
  
  return url, body, headers, method

def extract(file):
  if file.endswith('.har'):
    return extract_har(file)
  elif file.endswith('.zip'):
    return extract_surge(file)
  else:
    return extract_qx(file)

def main():
  file = appex.get_file_path()
  url, body, headers, method = extract(file)
  js=''
  if method=='post':
    js = '''
  function demo() {
    return new Promise((resolve, reject) => {
         const url = %s;
         const headers = %s;
         const body = %s;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.%s(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  '''%(json.dumps(url),json.dumps(headers, indent=4),json.dumps(body),method)
    
    
  if method=='get':
    js = '''
  function demo() {
    return new Promise((resolve, reject) => {
         const url = %s;
         const headers = %s;
        const request = {
            url: url,
            headers: headers
        };

        $.%s(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  '''%(json.dumps(url),json.dumps(headers, indent=4),method)
  print(js)
  clipboard.set(js)
  console.hud_alert('Copyed!')
  
if __name__ == '__main__':
  if appex.is_running_extension():
    main()
  else:
    print('请设置为 Share Extension 脚本后使用。')
