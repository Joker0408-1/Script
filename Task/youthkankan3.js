

const jobname = '看看赚'
const $ = Env(jobname)


let TokenArr = [
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh5LBn79oLxiwE-3LD371adhUF4pU9jzMYQjU9KwQC2IZi28uqUHKrR8OUdw9Bo1dbLC3h_GaITd1it6DLyeORAuc19wqNcwYk8WZo84qcrKbX7GZORQUqkOsgZ5-H9jPspRFblXfEYty-yK1dU3bY5BDp4bIU-E-vfI67VdNizxRdvqAdy2YcenESY-1kKwXvUjlCB0G51zL2IHcdz_vFw4svDhkcaJLJ-16vqS73TmFT8B6p5UuAkzp5uAMhH6hEN9QAW3Gfh2LUs0S_E4-9Nkco1ARQcIuYJWk6thuRW9NbSc3Ze3AyYKqOiFV-68u2zCORBn0EwWq0k7bRR7XQQQvbEkby4zFtiU6DH_Sed3TQhlF0ZdTry73l3NzudP578dnjMVNEvafw%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh5EbfTOd8SwzpoxeOCUMMWGWqqEBiLr3iLsFSWIXs6-ySiEN986ZtrJuxZsZ7rw8x8Z1oZPhkSHdd4GiNQZbvXNLYoVUNMvCW9f1tdtVNqfzPxiE8obQw-mFJph9K49OgxZPnnSDm3MhTIW49bZhuLcRymbuFxLFxrg7FPKCRFVp_dmf3soVxuIbbenrQz1JrjzOWoNCVSC6rUv6FCISABtlQtJHQnyDmvTOArncIux9-iHcpUOeSprCoZC9vv4aM5XNKWA_r-oiHow-K-Jr1cxRI-A1m2EOU3KtpzAvVG0trFSHHkzifzD2WS7mxEsK90SvX9BiHqbZHmWEiUrgWft8wgjK98ae67l9Ou-aYsuK1F1EoE8fIW4Xb-LFx0nEp5_S6yAjV3GlA%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh4uYGPRpOuytSvVDAC4PnUnvSx_4Nw1NgaCML7TWh8sSKv-NzUtzWUGCqcwX_qHoMgNVHjidPOXN3Gn84FnwFJt657HhxokFbyRMfpGPrHEZNw76rUq8sLN-CzX_rCQxxb6YlytUxppmRnLowtuf4k7GTO_mwEX-ID8jBV7XH7Dv9I9UZmyfxRY79-3qx6iG9uj4R17N7e2xJJsbztbVcZC1iRAcXGvIL8baBCd5wmTld-t-vJIeZgqg1nJA2-jdZVDto2E7v5VSuOJxMS_JlWDwsswGEESTIo8bl_TnjTA3d9HsruTvJZBz4S5VGGA3XXbpWVrGpHIvZLN80uCTKz44w3mA8e7SD3HAhXB2ez4TPyPctW99RIjIGRahQPqlArj4_me_pwDlA%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh4HtqLop4LfK0PD-l_IUk8BK6qM1BpA30hYjESGEpUXXT76yaZUNJtmbF1fLSG2voTVZHYFb4XJceB60hifIqMuALOEtTdhdKzHwlRwgkM_hYJSQhCryJ19gwiLvxJEfu8ixaRb8ZXzatNQvpCPQRfns9joUZsZy4u370rIaAkiU05DaIQ6XclalGkCCO5P_p_GdlX1syw5yBnYuAk8utF4K1o7VKtmxe78Ij5yIO0htrmwk6SATqj6hGPP1t-yHgco9JnSg3aI59H-X-LChVMQgi3rcVgAFcZmN6t8yPsgooIdnVFjPjufMZGX5VEIZpncExbq8EoGTWA_iDRysxsHI-fWY35vAjdf8TQK3uA6XbrYp6qE-wwrqZx8-Kv8q-Wa4s4UiE8TtQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh4_XR4EvPkYA9v1vrTd9Np1u_nUWnhP34L08CtWlgOUAV8GhksGKp2pYhxtzxCVjeWTlaNhUeAUtmwEeqa94jWt4yIux6FZY37QkwFRMDrbzgC-6hLvIny3q9kXZh7gEdansORkYFRpwSFZCy3KOgjESidtK-FyJKvfd8FG-L8OJgTXrU5PrZDiqof0v2ouKGWaFOfhzQqBcj5d0mEXKsgQEZ73WDmnLY4mfbbPKrpx6zOwnVYwbhTKnZHRVUy52_jXsjAEyb6IUqRNpVOr6qzjxLTBblkZaoyHBMOmgIIar19JLUitrvrhxJNQASNpfmv4KDPs0_3j9DZGWhQREzD8D-Tw5kYWVXfU15sFfxW_4e28MmN1NnsB3aYLFKRNEAun6Mfe3_Arig%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh7ORY1WHARoDe6FKfec2DfAtGOoBOiSdZO0DRe4ssIV8Dy5XXTugNu2enxpMH8HrM9TP5R5zMXDtzhHX2_v_2psDemcA0HgBxjIKJZQFiz9v1Lzi1T6C1UBrmCN9Qb5aGXylQXoqgh8TTby9JzZkPdvRgstNOJrYfZX61F8zXeRHpGdQ1nSCXwE2v4fAmL2CETMTLE4TBnh22M2rOvQxfwz6h8FOjRRWU3ZAVZFo68_3y1zJq7NX5145ULEc-GNhtpCx-14DznY0K_6L8PYzBeI0RWCqI4ijv6ajDtOhIh4wNIDaocvLcB2qMR27jIvlQDDIxsotD7sf5nFUE-WGms5ihnUshqjqhwOEAoSBZ-pp_qT5K4WTD4IABhK81AgYNfBZ_cyalAt7A%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh4C4SSdYdy1svD4xA2TXU5i0WssDp03pq6XWpvKnswB4UI_6SBy1BtqDEbJRoxpRL9LPZ3AaD7uu_Mtk9ylLZYcCitAtNEaZB2nD1fiBbU0e9JB-C7Fu-Hovvqaivd4BmWMVOpZJoYNPQmLtrzn0hpMJ_MtvK4AkugXErtPfHtQSLantfJu0CdVnBNlC1HY6YMUWzVCqhFGFbGiSRqol0Ujg-zsK9DtEJjilrtWwPSReHa0KgEOmDFFQT0K23o_2G-jUe2XJ8-yHroHv77WR_1BsMdgLM7kreyXnZLgD0KzvxatpVJ9xIz8WDZmBTcg355svAtgzeBN_81OIvKpLPt_42V3H54QJHEOIV_MNfcUS_MZTdrGqbl7avypIbLm5HdXNQnkOO1xMw%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh4HJu1q759k1LekX9_pLBU-MQ3Rf-SrJRhRd8mMT81O4kgrgMeHknNjol3F8PbvBtPXI-HDTfRFn8_b_ZyM0reAMbZ3oxnVEKBK5ml-I04IHQEyavhbzjPrGaUp4KdGBNHCj1S83H646ec2Fs4MURaM-2-cC9AVdKeiwd_xaZTcqZXosol9cVK9a67G9JoG9eJg9MhYKk0SCBKqUtIM2v4xIliFVqW6J__YLcT9ykGHrLQQhFbz7QOfuxHDlOwB4799gJwFAKsYkwjU9FCpulQGX2mK4THS-W6WUC67s6HUEJZreaglFnSnnywrTHCWROfA_PGwcZgSS3w_vAI5Nw4Qkeb3InL44nINMX1oc8kyH_q6b4Pzl2tWoy1m_KNfm-ILHahn0zvsPw%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh42_faiBBcgbPqS5DwGuwrGtxj9susDSctPN1g1C4tJJNLUI3aukawf1aku5X_wrCPMCER4IaJtQ33hg0oG9TxdqonnjzbaNnv8PCgCtBLo2bhvdOJ_9TCRmRGWliqrkiBtgvI5x4fCiD3JoFYKXuf2sf7CuclmKJUrszcATrZqRHha28Mjk7MyeTv9q4QF0yYvM3pzLRD03DkDJyAcdZxNNP3RojHH5zJZLjtyYiD4-R03R7eAfTwR4T3S2P-QAacdQI6Of6-jUy72D5gI3cPkeo9q_Ax1BLWsdAMvrN1ncF_2qdodQUho_ig7NJ606JNotuTuymNzLrtdY0OFeO01sJgkHOCd_iRaZ0eczKArMe7yElMp4pb2tRv83yIN6oqdgm-FxQel2A%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh52EQc0bxB0951LIe0N5nctyRr1gc_SSWYaU67Nkl8oWot_rMeUyl4MhHDsmKD2kX5GQmRH11wYZn2BlVkASTJB3ac8gWnVEcCJOfqII5fzMGuDfewuBS9ay_NbscMa-oyBs75TRIBh3fUlS8ayvFTPdiI3gp24MbWA1IZpT44w5XuZS9JquBHouXJ3LQHi9NiSO5WMcIsixV101VeaU01Oorbjqswzg8JzLvgdq6F6fZcwDVLf2IGKvdExFYlIk4awpnFqPt_USGO22rTfe4dMqqNOuj91DWq_PQFJNkcvwAln8g7lQs03yNOwCr6xVSUInQssaHcuoy-sa4a6wsskeHr4gVey0I0oVG_qPqmRGKqZusnnw5f5eeFk8Q0Z4dwTSEps_rJOYg%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh6hCsifHY_bn5IAxQ0deWs8DqK8ZCaMXN1_WmNgIUoXj_rec6RRjLM3m6VoNBfNBi-3S2RKFYtRPbuVF0NzMd-bRWdL-idPSUilS9NHx2aq6n7Rp-5AA1D6-PV6cTWfQS8IMsOyqZdflvCVKBm-_LGKAgZmEdqB_WBFc311xcElg2w0Pg5AZyBs0akpnafnVJSS6ozyVjfxlDBpOQYwz34RKdC3cgvtuW4eAscXOasf_C7P-NjtLyhOpTQ2VoIPzhDZB4L8b9BP-7qfgFPzFi-GwyadlU4lZ6TkoHB94Pj1m5NROU5NScb_iNWHyh6VtARzRpLQlSJU9FbC-QIQZUIBnA2RlOyt5M8V3FFgl8Yfdut7RWFCPllO21PTOICNNNKiXak7irXoUA%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh4rq8LrzIgQKrJBlkU3ieoxp9zq3GoCWt2qzJCb484Gw666wWyPvB18Fmo2qpDBGKH0r6BPa_CisYIpvJVmmUA8G-Gy9ZBvLmPXVjiDX9HxCwvUCdNROLi01NVxtTn8jctYA1ViSpAGRR2NuMlk6oDYRtZx7BtNZI2T3ECyhzyOiyIf21RGGMEMjrxfGBMHtL2ahc3NpPqFmyie3gej8_UIrv3S8VQK-cfJGO8kpRVYugCMiPrJ_xEByWOuAPdHeT9lGUIaIWUXHY6CYfgfiOyPqRBkIIU3nEokULnu-UJdx_PCw6At2gh36RWQ3yZ71CuhFCDhBO39i9lIXTOPz6sE4cSJdkYmR-q8OjtQGRRVjJDrbdeDZZcp73HYqT_Orj_yT9Vn1-9CBg%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh57ibTtSsVQ06A5H-dTLaMEBAlTF_GnOsW2Dg5R9WSJTChe6dXxKhgXEwYNxLHABHWn0MOxlBZRrig2w9m_O48qINw40LiuRufQezaovc3oeImIHvTj-HgKtVU7i-jQs72LYflMbmQzlAPBA306ucwKvtjEIzdUQiEDMv6LjDKY9h6HLoLcURYEgqvW_LfEGsyk3AYv8tjwuw4LoNxOoAnUZTbavGm_ko7F1kYuGRGPGDTqGXTRcGALRp3-XEQ31m4s-mRGPJfRUfKITu3F97qO5ETUN24sa0c_L7i7crJEUX1lIi-4f9mocL3RXE_bpZixLhnFoqvXBX1Fm726HQNHkKpy4DDq7bloBrX3ZXe4dv8-206ET_8sWRHJWu-LgJVTlgJTxopoZQ%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh6PiKn7hhxRBLPYQRtCyymRFodLg69LtKPL9xMdX_15s7Rsz6DlY2gMsA2zMrjVZP14YK7dJD4LlaLvL8g60t_QR5SzMyq0VHihjFmJPiQNxRXZveIN4cU4-f81FNnGS866Zl7ZQNafjoNm44bSP-skSTMxHQDGTxlUXK3rUOswZC-S4LWevor0cdPTPWnwGukdW4IVP8VIWyjdjHwnLfhBiXbreYupntR2QB1eB7rZnLdTGB2pPewK_wLbVMn16El2eXTJjviQ2_IGyZlx4I4QwmGFtJxWJtmvr5SJ7NCQnRyqu3jinQHMcAow2qtw4IiNC5S-Y5HNUoJC7o-uEaeJvOMGtGvVvkuCY3JtLTF7xcZYH6X9KG9caSaDz1XvkbedmgGB-WHy0A%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73at6PCzPTQzh5nqRLJ6m8ogZnCOyO9H6nPwvuCGOOGLPbd7gQ1Xy3iN1-OoG-cjz-e9FBRIYbmx0vNh_eBPmqVnqAfdChbMbBDvwtfVKX-HzqjfDzQGUZ-VtAeP_EffEZga_wFe4WoqJGZnaNJOlCgaD1dpVzEc9d1nG4nq11QZGi2Zp99zlsQjwNm699JE9uBNszKb9GuVlfHAimQL4uzftrFvllwdUb7bsl3VZwBMATF2_WF1VT_aYa4TA3ps8tyZt7Gq79A-oc-Xq0Aqheago_oI4WOfY3FRiKl2MU8FApnx0Kjj6zKtHfRMEM8hq3lhHBGln0DxEWZC2qcooeWLRyITUUrJ-v0mVNP2n_ibZ1ykXjbIzeNhW2uUtECM1MgHRgpOPscjlAehPZ-P3gwTA%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73adeDPo21lXu9Iu8G-RT-MWyZ5232AJ8_KaAQwM00MpAPNXDlWlRqZsh15I9kI2N8lWTjGjHSZ4GM9-Ju8QHhnVzUKFh2nFCPLqqdTI_6IA74JOvTHKnQ52SBCPinzT1InTRYsqQcApTIzO76sc-Mm0FFWlrmMbPjZ3T_a410BbzfbrfpaomLwz0qmonJ7FIi5NwRflY6bzKfRY1JJuViLhY8uR4j-JXkyDcasc4Dy_qVvrrADhTeevj4ivLzuztGL5CSVB3kXZ3a5dxQQ48EZNWjma88-CBZYS3DWx3LXnNb3oXQ45NAvRLMvO1yo9WqqpY-uKTOo8z0zXZdTBxltnf4SG3vzAv8HoQ9aJXD6b6fkistj_TLfFsZADGM6NJZGORUa2U8-b1kxppWoxe2jZA%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73adeDPo21lXu9kAQ1Z_N2om1pnqWfnUVczNJB1-tS2yciSyhz74tfw4fVaA5H_ktEjNcXeI-3tdpyiQi2lRPD-gMS6CbebLNaLmch2MsxXnKriXp6-V0oprOOZjIjCn6_wCP-caa0K63CZbriQj0zIotPRWu326IwkTEw9VrstUZ1Dp_xbnFns1EM3Cm5q8XWMJQeUXS7MX0Dzp_dUT9cGQgiXU0vhgCyXhqpD1Qb7nFJImymSk9N_P1qs0LCyIbOcT8HmbvNZ8OA9auZ3kX26wFtLrUrlD2yE0PDvC80s9mEuF2O-giXMMd1mx0wSUFKWsxvzubtabyt2is_F5Kvc0OzQFq5D4R4uKlSsdW9lZetYJcLg0uWN2dWiRgIDeWKY6XxqWFQMZ_Qozhrmgnsbfg%3D%3D',
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0E1_IIWlO28JBXE3A5LMm2J-u66WFL73adeDPo21lXu84SMosTIgzwt1JaBWO_KrYM2Rcv9oONDZZkbVgE_E0N_Mdqh2nWrVyFUultCrRGuqIG984qo7rWr58K0VsYi0vOgT7oo49iJ-YosEps_qKVsSEJqQWK0qhxPyq_BAfH3JdBHmtqNERAqRjFKGGSsz8Hyk2HXXV7SRnYWWKZ-MiPylyXSkfy20c5g6CTLAi6TlQaG8JOVArprudAg9jLHYzlosRzR8ICN1HwNi1Npx-BieHKS-27AvjprBR0z5HSBLBO2gZPoqxaCeh8P4JF1UB2T3ecvV4_eh4ba5NcRzpXqgjYOGRdDsoK6ioz41yi5I5XMFsVqczR4CpIHgFk3d5nqFnDato6_GAwjMouhTNKYPiTVhPKzgXqOXUKKVLGQTPbBRisCOzVg%3D%3D'
];
!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function all() {
    //nodejs运行
    for (let i = 0; i < TokenArr.length; i++) {
        $.log(`\n准备第${i + 1}次任务`);
        Token = TokenArr[i];
        await adlickstart();
        await $.wait(randomNum(0, 2000));
        for (let i = 0; i < 6; i++) {
            await bannerstatus(i);
            await $.wait(randomNum(0, 2000));
        }
        await adlickend();

    }
}

function adlickstart() {
    return new Promise((resolve, reject) => {
        const url = "https://ios.baertt.com/v5/Nameless/adlickstart.json";
        const headers = {};
        const body = Token;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                //$.log(data);
                const result = JSON.parse(data)
                $.log(`开始任务:${result.message}`);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function adlickend() {
    return new Promise((resolve, reject) => {
        const url = "https://ios.baertt.com/v5/Nameless/adlickend.json";
        const headers = {};
        const body = Token;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                //$.log(data);
                const result = JSON.parse(data)
                $.log(`结束阅读:${result.message}`);
                if (typeof result.items!='undefined'&&typeof result.items.task_score!='undefined')
                    $.log(`本次任务获得青豆${result.items.task_score}`);
                if (typeof result.items!='undefined'&&typeof result.items.score!='undefined')
                    $.log(`本次任务获得青豆${result.items.score}`);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function bannerstatus(i) {
    return new Promise((resolve, reject) => {
        const url = "https://ios.baertt.com/v5/Nameless/bannerstatus.json";
        const headers = {};
        const body = Token;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                //$.log(data);
                const result = JSON.parse(data);
                $.log(`完成第${i+1}次阅读:${result.message}`);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}









function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}
