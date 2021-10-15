

const jobname = '看看赚'
const $ = Env(jobname)


let TokenArr = [
    'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCFeY-sbvwBDdA3HLbXFJASEEsRBECMduxZG795z9ydP_1WXK2EAwctYDdGtavL8wyQ2wL7bK29IQg8R918OGrrJgpwnkXz5WFjWAaLuD2nxnFsPhBfqZgOIWPJ1K8VPOe0nZ0xfONVZFWmJ-KMdLZfdXlhP8kFXA1dCtAZIrRTN8GTLnOqBb78VR8wvDC7xle3P02eEH2DOaqK7n7z6ZsZwTD1RenPBKlwoz5U091fb9OrqGSOvK3zYQg5tKYMB3cA_y0tjLhTBDH66j65E6krzfSAWoPdijRrXoLPC6AC9iOZ7HnejZufQwka_bmyWU8-emRz6Bznh0H-gc-_62G3leIIEsf8BA7bZPYTx0ljur-WsRKHYlywLRmUbC-WkIA_YQieljuh6qA%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCFrbRxL3ej2QUHmwxeBwL4b86bfhuHflaafPXc0ti1fa_KA90nMpalaQsw6BNdDVQWJkeY8QLK8A9_P4Cq5G83XFqX_LF6XLKHOnf9RvG0K99Rn8Ra9limHuDMzYtsvrgc2inNFf9DpXddp1JLMrZdDaW7RlSh0wTlKrPAY78z2Ooc2sQQh7zFVUbSdbYNjcP7s88qz7EYNOMPewP62_dLKqhwz6xX3YoaY6HdqvnxrtHFwAS2VEdkH_8yUYdcxREOms21ecmT23Unr_MPuk14xzNd0jwyDeq3sn34T1LEqe8AIaPbG9rB2bSTcZM3S5msc1pD1IOp9qw4UlaDwMsOMXrGerKhUgkdsSnb3wny6merofECKDe1-YzL1wLLln8bg6Omo1QA8Wg%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCHUhSOVAjnhroHW0jo-SlO_C0CK4-Y7rzx9G75X3urygM_apMYBhTfGxPRc9wVHVozis7ioI4fjkV752ayYiz5JjFZcMiDQwzljCl3zydBKRjoPVd4PSmbV8UnjK3dpOJgoQa-I8ghsFWvON7UJhB6PLq0s0Gn6m8TamxdP2gh6cdM79Y_2KOwZeS2BSR1iUf1ic9IHKpEsHM1xOH3ux5ErwovZSdgPYl8Ujm2qxQMB3AjFnMxZSZbmursdwffTpBM9vHt1_VbiG-M8EJbBUwfMvJAft6qnQYMij8QNw9HylFavGURKgORtRPWSLGiHBpjsjpJtHkhgE79H5-rxZADJgkcm4UvcYR0w4RK1NUMHLKEA41o8xhLii-MIb3kFuZAlGrzJ90fGRg%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCGxIAx1r8lYDMi0d2n2v5P_iC_WgC-ZI_GXPm1ctieLMzI9iZ2gDhCdakEgyp_c2QgBpx68YfU6VWs13kzR1EPKueJaFQkmKPWFz6kfBqcvLAdplWElQXPxOZ6IqJKmRj7vkowriCodNNNrmOqcWt873soa9BdzwMyY889Y5tkrnKS-AOfRwG6lB03aDCAB_XJ9-FKrzZNKpx5y5qxIQYEa-e_7N-959nISCUkW5S4yvudCdC657CYODvFDVpbgzRXFAKeZUilxR8SaDTcSLzd-BLocweFYLMhaGSCRMRFhUddhoO5PM93dUg2gphFK3XJjN5gsMEbDLCvzAhiRCOEhFrMEkLVstbcsjH-RUACWno70jcKBQbCKi1tJZ9cxQsYLu4xd6Zev6A%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCEZtjaNDdovpQ8ul4JAE8mfxPJpff45uSFt0jy7aMNmHBCDFc5c3c3tchNmwVm_kleJQG7WL2wGJMf44XACKdJ-g_hI8v4gYkHkQwGuLkoQ-_KmZZ63Xzu7lx2RRLBePk7m29rU1rQJi0wOolSlGxI9avWJPj1ZO104BFn1_9lfIzTEZz9LzYOqdxTn87lzfLv8jOjFsjY69I_ZW9NVlb0uQHumzU7YUrQRS-iATZhmKsqJnBU4qjriRv5siBFQvafA28NOex9fs7KzWFXtWef4LWpQzseJ0x_zWqFA2R6wae9-VUySQe0wsHcDI9hJbrG9hYbRG7G2QCkKGtgYu_xyHntfJKat5U3ZNR9mXslkDBlQD8zYFav9aZOUTpJHP4beBmTx4b0h9g%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCGRqJ9GthYF2IbjzNozlZTT4FFjhwepPyednc6uxakCoHDuO9gq4f7fx1dGB1g4hCyi_ddUgZS9CQ-81n1JqRkpGGnlF_9Z6Z2wHDm-78ZnTi_trX6awEbGHBrZK8HrQ3msznCsHjBWrxwkYmQmBvyWyKbIhv1ifRzEMB27X3-9BfVN-aE2IQ-qOmKNwmVSz9DQQQqrAHUYGGQT1pF2fKUBkS0Ox0pH26VoaGR69V6mKI_evIaxgkM7Vi4TpCFf1PRCiVxaIbHY2b9crhDyQgakWJ72fGpmsueG0H0PKHtWYHfWo_DOKi-7qTXXXhB1PVh9GHtsadXm_YJaMZFlA23fa6fnc1ZrucwA982tBRerGmWlwAGb-iJGyGbQ2A2R3Hoj82iITMRElw%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCGsbuvJzLMd69PNy1KyqqrRu0jq8wQDx1AURNv_Op7BoA7J_JK9HQS2bBb2iLAi4wBAqx-iyzzACYroEvYeS1nLINH1Qtzb9dwXkyBeGWSsH8Bi-PHL_WSd3aCzRJNAU0eOfo-xRGnWZVEWp44g6KIm_f5ZWOj8LGDVtW0zXHW54AIa5TEe0uYpPySWXdV3jfwzQjRT4AXvNNLNI8kNHMSMaO9OA9EHnNiqaDPRF8yzEFJdZuKQscst7RXiSFQBITeCXZb2VQGGWIzNUIzeo4peeGmiXz9FI5LJlDSYw79RzigcyXGiVzq3-yg4XJExsOtY_RhxPmnPdtxk0E7HiLmF8fSe_MIm2eBj6uL8DlyY8kC_aaPO7YCUYxpjX5K0lh_CRp6alk_7qw%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCHjffUspEK4sYiIe07EyVI383h-4b1j3d_3g6OomMQRL3YHpTMaeCy5Ae0oNJyGPSvOySQbb1gmbTXXezgwzGlSUqTxiS59gcXCDYmkjmsEjT17hk2eHqbioKeAL1Z4fLU8gL_k5DuDb0EbZpCGlcoaARD6wjhA0bdeXWgszegugcimVcQo4JYqfjXmlzjBHputxH0omr90s97_N-Y7WF3tl-_OFjGLLPjPnpC8ohuqu6iAoE_MVpsUOW9epwRtbz7utvLK-zs5LVNDAdxC0zbTxbaZfefr4MZPKhzbmqSE2SoN8FOyzh4YC5TNDpkz_lqGB2WEF6k6G9JoE58txN7m-IvnRaEBumv5YJt6FFOW0mZ4MdVEgAVcELoPbSNqa8pQyZ-eXEgsyA%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCHdv8uVIwrFoNkSc2V-spn3IxWZ5erTW2NEuAJr6Bt1pXo3j9PVVNvwgdujC0M2oUXdRKCc7vCbmaHuzeq6NhiAiZPnBB3afM62El6hlgNHO89DlZbEozlH6oenXH-jBgL12KUVWfMKi9RylhrHHzXCiMiTQnSQFlU4SXxawDNHOo2jqBiQHEJjhrHRiOaBdCG62W3qGpjLYdFVUQyyySDIKepbczPkPk4pALhAFebcGVqUc1O8hIten36qd5eGalGHCICYj1C1_8bvgq-_h33kgDy99TilETgUOs_YBuS8TaAeE3NiKkeVT0sQEfq_dm-OdUGlHsKe7gpboHIlpTYE8Jy-Pndvo4XpQo10Gzee-L76QiWJeEMK_sPSeWh3LtUUxks0xTBfpg%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCF6nul_ADEPmIdVOHcLIe5V2Gy5zyW9nifGeyt1TeyT5rHzPoVxpxRv9DzGtnoagNV4KhD6PdUWI-rggy2vMkGPIrpkl1-BHSeKwavt3AYs1zf2CAGjTSLb2VH8TCOC8c-9ViGy49zxPhbvRwb-yjoXx5H9oEw9lz8nrioWWZz8XunP_NXO30K9MkiTXmyB6sddKpKF9yoK_QrdrlYuYaWq_UZwUynl0fpSWrOVccLZQkyFCntzG6AoW9bPZ_L7meLrTWg4A7RLsjk_DV7DN1Nrw8xW3ET0-OVwqrqrwHXP9R4_2NMOvMAR79C81KDdgwLTrZlLQGrEKfhkUgVVnQaPQFRUffuGieSpQnNQXZVzeTvgQJrlMsdCCL8dw9I0Juo0d4G9LxMRlg%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCEsRE7h39JuQodwAyE6ZQx6ZOb65x3Pl6x6qQN1EOU1ug6iVGRhjhb3s47N9mueNBhJ3cM1SA1yRS37g1b0G-DgkWPWmhUuxmn0H_IG1R23HsvOHLaVcJNBHnVw4p49A0E9qAhFvWYUR3eABmEUaFtOpxb7a2COUYrwnH_FDw3V7lpyh7tbcCB69lfcsXEwDTH8nG8hfSPENL48EFp9v-7RfU-GwOzy-IPJp7nwQ_MMT1nYc_nVgYN3VeQ5MVgryXVplZOBXo65zMcpc4MnDRgZUif4Omwe5sD5ZA-imcKWuvPb_h6BdTtwH3dwKwKx-4xOdF5TbFr5XferMpRxEVBh0p7IRZgSgWM1lLDlkH4nT-CQ8veR3--OR9WMlofLLQ6xQ3UJi0uH4Q%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCF4u5FRMALBR_JnogfXxLM9q7lYF42fHIRv5f27MDpFO-6m0NuHcYJ3GMEiPJzKXCTj4rewdinnQXKOguoB06m0LST3dmp5y9m4N70gLGEqt0wCd0UGcZNEA8CiJm-Fue3Ji5HT7imX_d-QfvyS7T_u-o-LSe6jE5CDon-jhfQZmXqcqiXJvicXv7VIISYSOv0ZjZi3cUYGYgjCF8VQnaTM322Arp8PqfqEZRqsK_7iZN-uQhyyrCGyHxdfRC5bQv2zp5jgg3CmfGdUO2ZbXqeZazIV4quReev1UWpoOSxKJmDp_yeAKlny5YwyaC_DyndQaScYQv-UUokCTIkbxoEzW6QuXZMfWyEr-2YR3AViW5Pt6WiKA0d0CbW0_yGF1Gi6W26yH0oPbw%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCE7jmiQJEljUeS9c-OGy7ASqwcT3N8Wo7ERhrZ2bfYw8KJdzp3uoeHs8rQ2kVraO3JD2UVJfdGeahykXrVshaCexvTO99H863rTYLcQiDcpbxkkJ7HmpG4p6-Rf2PguEdHC0ZNc_1LrjN3zGXDMgqo3rsuSbzs9O8cP-aYXGAJHXdMRGA4Z30ZMKrtuD2cpIgIdUM9I_H7nJmC8PlOQoz8MtqydKLse9q5rN3OHrizYP9nsWgliC8Sv0jKBAAViBgAedEyod_la4BXstDz_QOhFpJOHBF_9Kf-IKH2toZWoCiBapbOxxqeSxBiZFOaVt-lJyZtv2CH6XRwoQavVWAOHgMB0VsSTy7mZ4-o29GS_cZZezTT5fsO1wBPwq8eQ_M__nFun9DiNtQ%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCHqXXY-UxNN5X7TtHG4H7n4pZf6Qqdb_F_oMJ6sXn-zj7-1i5jPSDsINAWm4TOkSba4jIxb9lUYX8fDzyWZJ1GmkDHOUCqe1l6fRSkdkAv-aYXEEOnWO6A7J39C5OHj8nbDDN15Ybz7m6vZpD6xYd7Hflxdv6vdLJNpZsLlmCqYceQ-4kJs8_va1hNSeJmVyn0ZiB8A4gvT-LP3YLbnyntrJtqSf2cJzIRbyn_Y8trb8GBfdbCwOCqvvQpVya_9wlozm6IW4Eoxv8pFLEDKhehBVeck5bixH9Q4yIIan8DrZwMsOR37VN3kFXYeUQGNDOVbzE2DPwfiF9mnUiOl-fjK5YFXYxQhx0ifF5EN7qAaVlrITmtsAhBL0oLYkYuhxnYBFZUpOuO24A%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCHei2GJrc9-3G0S5f7JWHfOcSSWchHiFwKWB9zedauO3KOPcsTTB-riaS5hsdP8MTbuWpQhQE-zXKhcGOgs4yAOEKwQ8ikh7apvzhQn2eNcRWzC7Ebn-ofwlDsTfpKxoqgbc50ik0h9I9QZT6sauDsNAshMJHFDRKj4uvl2rkMnSx17mEf1jBozktOTbtsuXcIa9M6l06UwFzQWDZg0YS_qYUwEwusl6aWOveg5cvXOAXXlJnVlXQfXr4hWklhMqMKz_5YrHT1vAx4T-BXqhVlSItpMt7s51YlVtniSogTKbGUxd8LiBOEh5fXV6SjGbnA800_s4PdkV2jwDL9bVlCq7nxa3UKu0KcSwyZ6jifZ37UhbXPx7-3NjXBYI8rTkcTZH2dcW4vCPg%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCFEVjXQolXNJc0DIsFrdoKRfypTcocHvLfcI6UcZbUQJSN-pJNru4V_pkhHe8KnKpW5tw0bhrZVyb3wxeXNtLsByuuH0ilV3cISkK15-PXpFzqk0N1FQlRrAEKqHybzo2oVhxsb68388Yv7FB4tIqYb18WriyjUNOgckygAGM-84h3af2z5R3y4EPyIntE7t9HOHF_NN2Svig4RKPGTADieLi0851hHzCsJWr4XR7W9PHqNBYgIcjtLCoPNWJ5IYNffZTCLi5mjNsukzRrdg7cvcWwcUeUuHv0ehn8nUGN9OZWT4G6SKc2V1suZ_Pdh0BglPpgZYLa-kQ0cA05XjEo_V7wHgxdNfejEMfPguriueRveqmLGzNFhlUBX8DrNQKqaX6YnReBQPA%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCExFDzrb7r2p6meodpeTlca0CRtS0XX7AlIef1jxQxD_s7pwven8urMGmoCUvmCFHEojd2XHepwovhXw2TgZLpL-IbG552s7jMwH2VrhWLE2QZOkLbc4xAE4vohv0kirb8uiaxfsaFx7g8-flz42Bb5rSymAimgenivUnjpgjopdohpGxEoaXFIX5ydneAb4lpRlh4HlE9h2JBSog4Qar2Vv8qth8JeXWE0bVECWPCa6x7sqHYjH5a733dJvscLfvvbSqLWF804bVGqUvOJC2hutTSv8dHre3RLeNR_1Bw6dHk3yqyWvDfDnfqAsxFUDMDijHJLipQwJTr9bNkt0Oh-yX1XzhGA5sJ-wQFET-dWnQzyUST9nsBXoE12uaamRRLRBkQeFg4OUg%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCFt33bSLUjIFBENLAhEleNT1cRYcauIUQHB-Sn2GXP7iE-P3fpQe0tr0WOFh_4MzERj9iOqLpEpCXYUUJZDQCMTQrT-K-Q7vGbwXJx0jDJotefe2GtsDTEa7wPB4-zuGjAFP_B3EUpyyKiJCCmviL25UkVOtvMMl2Y9-ewZcWFSu_PCmNU9JOlAntvAvJJq3FatcNqryfRi97yC0WYJwRcTcD0iIdPdpB4buJF3YWj0RERVOpXmCnPbNX473NlCes-a1jlaAaqGeNHb0FGjd9Q8-1ybCH8NIxsumnr_GvtYsAj9sOrLxuWdPs28NwBAEEmgyv8I4QlXaSWU7mKrue-mqMIHzf_oAV9QVa2h0BtrqmFDBjFMqhCEaD1DEBXzcbhik_9DdwwQWQ%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCEAURCypZeAKdXucYkwK3S1ENhuT2mZnHztXVcvd6XYbLDrEz_69o-qNdfEicr5vuR1XjWt5eLgHEJxJdHFq73hU3HG6PmI_V4cKzSEOokTofQIct_Why3zYNHMgzsohRavwui138mtS-uwGoxOpdh3lfmco4ihRfyW4F1sDRUWr_NBqj6UyE_iwxA4-pCkrrMEva4TgzQ25LUaDIE7ue-UTjtLn7ETnktzszuyKxsZSlUxCobZ6k2BtVKxC4IcU9DW7nc89WGKZex0O3oHEMEoRO9jfr0gfWocDeLK-EJDqSYVSrEFjxVkZJbMf5soLKNZZnA1Efc6qadTOpICLZw6Rv2sDDm3_gW5jlbdzAzbzY-dVUywK7b1UnQ9lRg5aJAztZsiG815dQ%3D%3D',
'p=9NwGV8Ov71o%3DC5Jtxwc6iVuTcJotRQ4YI8A3NCwuYXT0355OHYcFfA_DH49KJiDULn5b7EiVrDBTx1UYSzKgNCE023gio2q6yY9bqC9pg9bEMwv1cteU-_KgI6t1Ngr2IElfH4KLvb-PrdSF2SpA7RQ3xVNx0KTniM-n54k00bZKQ7t6DE8RfUV8plvsgdvl2_yhZGuOcYeg3CucDo9w0QEM4yXFeYugEkT85bRx4PKtn6WMhC2qFxTh-0hixBMF4DDSEPKsoecjSLg3qWo1BIQWrBJPJOsKElc4A5_INDxyKp8lgIJV94bewaYh88uqUSJqWp3amC8y10JvIyY0GhsrTJ5nWjxDglSgwPi_6C7ZyYOMhzVgv5549FlCNN6d3rCpolTGK4qmNYZI_6FzZGNKs2bJI9QGbM4hvDzEW-tz6xUawmboO5Oi6V-njMfjhelORtOS1YuOFYZwftaXTNcs3Ljj5cykVg%3D%3D'
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
