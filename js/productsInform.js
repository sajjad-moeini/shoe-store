let productTypes = [
    { Type: 'Woman', count: 10 },
    { Type: 'Kid', count: 3 },
    { Type: 'Men', count: 4 },
    { Type: 'Sport', count: 34 },
    { Type: 'Sandal', count: 4 },
];
let sportCompanys = [

    { name: 'nike', count: 11 },
    { name: 'puma', count: 6 },
    { name: 'adidas', count: 8 },
    { name: 'newbalance', count: 9 },

]
let allProduct =[
    { Type: 'Woman', count: 10 },
    { Type: 'Kid', count: 3 },
    { Type: 'Men', count: 4 },
    { Type: 'Sandal', count: 4 },
    { Type: 'nike', count: 11 },
    { Type: 'puma', count: 6 },
    { Type: 'adidas', count: 8 },
    { Type: 'newbalance', count: 9 },
]

let productsAdresses = [
    {
        name: 'Woman', price: 10, addresses: {
            1: {
                mainPic: '666-785s.webp', allPics:
                    ['666-785s.webp', '666-785s2.webp', '666785s3.webp', '666785s4.webp']
            },
            2: {
                mainPic: 't84-037s.webp', allPics:
                    ['t84-037s.webp', 't84037s2.webp', 't84037s3.webp', 't84037s4.webp']
            },
            3: {
                mainPic: 'k38427s.webp', allPics:
                    ['k38427s.webp', 'k38427s2.webp', 'k38427s3.webp']
            },
            4: {
                mainPic: '967145s.webp', allPics:
                    ['967-145s.webp', '967145s.webp', '967145s2.webp', '967145s4.webp']
            },
            5: {
                mainPic: 'A05157s5.webp', allPics:
                    ['A05157s.webp', 'A05157s3.webp', 'A05157s2.webp', 'A05157s5.webp', 'A05157s4.webp']
            },
            6: {
                mainPic: 'M57172s2.webp', allPics:
                    ['M57172s2.webp', 'M57172s3.webp', 'M57172s5.webp', 'M57172s6.webp']
            },
            7: {
                mainPic: '103-177s.webp', allPics:
                    ['103-177s.webp', '103177s2.webp', '103177s4.webp', '103177s5.webp']
            },
            8: {
                mainPic: 'c13-694s.webp', allPics:
                    ['c13-694s.webp', 'C13-694s4.webp', 'C13-694s6.webp', 'C13-694s7.webp', 'C13-694s8.webp']
            },
            9: {
                mainPic: 'c22341s2.webp', allPics:
                    ['c22341s2.webp', 'C22341s3.webp', 'C22341s4.webp', 'C22341s5.webp']
            },
            10: {
                mainPic: '31616185106462.jpg', allPics:
                    ['31616077266974.jpg', '31616185106462.jpg', '31616705757214.jpg', '31617166278686.jpg']
            },
        }
    },
    {
        name: 'Kid', price: 8, addresses: {
            1: {
                mainPic: '797d562b-6825-49d2-99d2-341bb4d86ede.webp', allPics:
                    ['797d562b-6825-49d2-99d2-341bb4d86ede.webp', 'c5350b88-e532-4008-a96f-ca85a0809e70.webp']
            },
            2: {
                mainPic: '4bb45c9a-54c5-4907-af74-792d4e1c28ec.webp', allPics:
                    ['4bb45c9a-54c5-4907-af74-792d4e1c28ec.webp', '50ab7fe0-430c-4d62-a1ab-e9402b5c32b4.webp']
            },
            3: {
                mainPic: 'ty_lavender_indigo_926a3ec4-7700-4ee4-ab50-ca061f78a818_1200x720_crop_bottom.webp', allPics:
                    ['ty_lavender_indigo_926a3ec4-7700-4ee4-ab50-ca061f78a818_1200x720_crop_bottom.webp', 'ty_lavender_indigo_top_1200x720_crop_bottom.webp']
            },

        }
    },
    {
        name: 'Men', price: 10, addresses: {
            1: {
                mainPic: '3965_0_1024x1024@2x.webp', allPics:
                    ['3965_0_1024x1024@2x.webp', '3965_1_1024x1024@2x.webp', '3965_3_1024x1024@2x.webp']
            },
            2: {
                mainPic: 'longwing-blucher-dark-brown-box-calf-adorsi-1_1024x1024@2x.webp', allPics:
                    ['longwing-blucher-dark-brown-box-calf-adorsi-1_1024x1024@2x.webp', 'longwing-blucher-dark-brown-box-calf-adorsi-2_1024x1024@2x.jpg', 'longwing-blucher-dark-brown-box-calf-adorsi-3_1024x1024@2x.jpg']
            },
            3: {
                mainPic: 'loake-waverley-black-polished-leather-blucher-shoes-3-270x270.jpg', allPics:
                    ['loake-waverley-black-polished-leather-blucher-shoes-1-270x270.jpg', 'loake-waverley-black-polished-leather-blucher-shoes-2-270x270.jpg', 'loake-waverley-black-polished-leather-blucher-shoes-3-270x270.jpg', 'loake-waverley-black-polished-leather-blucher-shoes-4-270x270.jpg']
            },
            4: {
                mainPic: 'web_cm_ss23_-_deck_ii_g2_grey_above.jpg', allPics:
                    ['web_cm_ss23_-_deck_ii_g2_grey_above.jpg', 'web_cm_ss23_-_deck_ii_g2_grey_pair.jpg"', 'web_cm_ss23_-_deck_ii_g2_grey_right_1.jpg']
            },

        }
    },
    {
        name: 'Sandal', price: 7, addresses: {
            1: {
                mainPic: 'c55500s.webp', allPics:
                    ['c55500s.webp', 'c55500s2.webp', 'c55500s3.webp', 'c55500s4.webp', 'c55500s5.webp', 'c55500s6.webp']
            },
            2: {
                mainPic: 'c05902s.webp', allPics:
                    ['c05902s.webp', 'C05902s2.webp', 'C05902s3.webp', 'C05902s5.webp', 'C05902s6.webp']
            },
            3: {
                mainPic: 'c33850s.webp', allPics:
                    ['c33850s.webp', 'C33850s2.webp', 'C33850s3.webp', 'C33850s4.webp', 'C33850s5.webp', 'C33850s6.webp']
            },
            4: {
                mainPic: 'u96330s2.webp', allPics:
                    ['u96330s2.webp', 'u96330s3.webp', 'U96330s5.webp', 'U96330s6.webp', 'U96330s7.webp']
            },

        }
    },
    {
        name: 'Nike', price: 17, addresses: {
            1: {
                mainPic: '437d3d51-6ff8-4b50-86ba-ddd4bd4bbe06.webp', allPics:
                    ['0460aaba-6296-4521-a56f-dbb1940f61fa.webp', '437d3d51-6ff8-4b50-86ba-ddd4bd4bbe06.webp', '7adb3fc7-bacf-40b2-b273-941183dca17c.webp', 'bac6b52d-5f3f-4625-8b7a-8228f7cdf03f.webp']
            },
            2: {
                mainPic: '4fc84809-add4-4655-9eaf-3d0f2eab3706.webp', allPics:
                    ['0fb1c28c-53f8-4dfa-bff4-7a3640bda83a.webp', '4fc84809-add4-4655-9eaf-3d0f2eab3706.webp', '93659f2c-bed7-4782-80d7-447fb23027f9.webp', 'b9f2338e-5a91-48e9-8520-c4126487feb8.webp', 'c9b384ad-3659-4f39-8195-42f6a5af66f6.webp']
            },
            3: {
                mainPic: '23edacbb-1055-4bf6-8447-efd4c590ba87.webp', allPics:
                    ['23edacbb-1055-4bf6-8447-efd4c590ba87.webp', '25c295f5-a73a-4307-b801-dca00864c593.webp', 'bfff7171-fcc5-4804-a42b-5c789961b0cd.webp', 'e6d3def3-8de6-43d8-a12d-5eb6b163fe66.webp', 'e82332db-b9ee-43f3-b039-aa386e27042b.webp']
            },
            4: {
                mainPic: '11738ee0-1d05-4538-b854-46f4b2d4372d.webp', allPics:
                    ['11738ee0-1d05-4538-b854-46f4b2d4372d.webp', '1eaaf0f7-50cf-4416-8e07-f16f18359431.webp', '40fa9bc2-1f8e-4e39-8dd4-2b893dfbba05.webp', '933a9ea9-fe3a-4e44-b794-f81ab3915f09.webp', 'f14e60af-0e75-40f1-81be-256ffcf526fe.webp', 'streakfly-road-racing-shoes-V17qZm.jpg']
            },
            5: {
                mainPic: '37daa169-7747-449b-87bd-082a9c8f090e.webp', allPics:
                    ['37daa169-7747-449b-87bd-082a9c8f090e.webp', '785640fd-0a6f-4249-b769-868909a298c0.webp', 'streakfly-road-racing-shoes-Gn30VC.jpg']
            },
            6: {
                mainPic: '741b1b39-4a28-451d-b144-c6d22121c739.webp', allPics:
                    ['083ac7e4-3914-4cbe-b8f8-586ebba93e73.webp', '4b160640-c635-496f-b604-2bfa2a11042b.webp', '741b1b39-4a28-451d-b144-c6d22121c739.webp', 'b2117ce3-3d5e-4146-ba13-ed228ca73522.webp', 'b280eca0-5bf8-4c8e-9d4b-42581f82ba02.webp', 'ff686460-1b70-4ca6-a9cc-32a86a6d1053.webp']
            },
            7: {
                mainPic: 'vaporfly-2-r.jpg', allPics:
                    ['314283a0-1227-4a19-9ccf-81a4bba03674.webp', 'vaporfly-2-r.jpg', 'vaporfly-2-road-raci.jpg', 'vaporfly-2-road-racing-shoes-D4ntS0.jpg']
            },
            8: {
                mainPic: '8e454021-19eb-4a64-8dd8-48c28b1c6643.webp', allPics:
                    ['55420faa-df54-48e2-ad15-163b1992be2a.webp', '8e454021-19eb-4a64-8dd8-48c28b1c6643.webp', 'e4ef0b8f-d49c-47ac-92ef-09853ceb1bb3.webp']
            },
            9: {
                mainPic: 'b6c4ec00-7a30-43fc-9504-58cf27c00d67.webp', allPics:
                    ['131f0cb0-643c-4cd2-9f15-8009a5fc5238.webp', '2f4b0752-c8a1-4583-baa6-1dbe58ad62c6.webp', '58931a5d-71fc-4a38-9690-fd949dd281b0.webp', 'b6c4ec00-7a30-43fc-9504-58cf27c00d67.webp']
            },
            10: {
                mainPic: '3c430496-e334-422a-b1f4-8ef641164ff1.webp', allPics:
                    ['3c430496-e334-422a-b1f4-8ef641164ff1.webp', '44ada60c-f8a1-4258-8656-b1a92f59aeba.webp', 'accfb3bb-3ff9-41d1-8423-c5fe3a5a862d.webp', 'cda95f41-d1e9-4b59-9f6b-7a6f7737e4a5.webp']
            },
            11: {
                mainPic: 's-l64.jpg', allPics:
                    ['bf9740f4d9964feba7beaf8f00c78c07_9366.webp', 's-l500.jpg', 's-l64 (1).jpg', 's-l64.jpg']
            },
        }
    },
    {
        name: 'Adidas', price: 16, addresses: {
            1: {
                mainPic: 'ec960dfe508c4aef8decaf89012e2e50_9366.webp', allPics:
                    ['6df240fdf8b34274913aaf89012e467d_9366.webp', 'ec960dfe508c4aef8decaf89012e2e50_9366.webp']
            },
            2: {
                mainPic: '9e724342f3994870ab5daf9c0102a61e_9366.webp', allPics:
                    ['2444bada1b06444ba63caf9c010281e2_9366.webp', '9e724342f3994870ab5daf9c0102a61e_9366.webp']
            },
            3: {
                mainPic: '68ae7ea7849b43eca70aac1e00f5146d_9366.webp', allPics:
                    ['68ae7ea7849b43eca70aac1e00f5146d_9366.webp', 'f86168171d2a4644a8eeac1e00f52f85_9366.webp']
            },
            4: {
                mainPic: '069375869e2b4fe0960aaf5700b61636_9366.webp', allPics:
                    ['069375869e2b4fe0960aaf5700b61636_9366.webp', 'NMD_R1_Shoes_Blue_HQ4450_02_standard.jpg']
            },
            5: {
                mainPic: 'fefbdd4daa594035a3bfaf2a01600a3d_9366.webp', allPics:
                    ['fefbdd4daa594035a3bfaf2a01600a3d_9366.webp', 'Ultra_4D_Running_Shoes_White_HP9735_02_standard.jpg']
            },
            6: {
                mainPic: 'c7c25b8f51da4d2299afaf3500b71695_9366.webp', allPics:
                    ['52f88fa1201a49259b3eaf3500c3118c_9366.webp', 'c7c25b8f51da4d2299afaf3500b71695_9366.webp', 'Court_Team_Bounce_2.0_Shoes_Black_HR0609_02_standard_hover.jpg']
            },
            7: {
                mainPic: 'dfeaac2e2d8f46558e76af7f010bafe5_9366.webp', allPics:
                    ['037f62640484436fb159af7f010bca2a_9366.webp', '53d8d412b2b6439c843ead6600ac24fc_9366.webp', '99c458bdb9924ba7acb0ad6600ac1668_9366.webp', 'cde9362a09ba4dd38c9ead6600ac074e_9366.webp', 'dfeaac2e2d8f46558e76af7f010bafe5_9366.webp']
            },
            8: {
                mainPic: '961a039d8e924ef78a6625fc863926f8_9366.webp', allPics:
                    ['961a039d8e924ef78a6625fc863926f8_9366.webp', 'b0fd05cae60a48a6bd20c800cb0b8636_9366.webp', 'Gazelle_Shoes_Blue_IG0666_15_hover_standard.jpg']
            },

        }
    },
    {
        name: 'Puma', price: 15, addresses: {
            1: {
                mainPic: 'Deviate-NITRO-2-M.webp', allPics:
                    ['Deviate-NITRO-2-M.webp', 'Deviate-NITRO-2-Men-Running-Shoes (3).webp', '<img src="pics/puma/1/Deviate-NITRO-2-Men.webp', 'Deviate-NITRO-2-Mens-Running-Shoes (2).webp']
            },
            2: {
                mainPic: 'Deviate-NIT.jpg', allPics:
                    ['Deviate-NIT.jpg', 'Deviate-NITRO-2-.webp', 'Deviate-NITRO-2-Wo.webp']
            },
            3: {
                mainPic: 'Deviate-NITRO-2-Wo.webp', allPics:
                    ['Deviate-NITRO-2-Wo.webp', 'Deviate-NITRO-2-Women-Running-Shoes (4).webp', 'Deviate-NITRO-2-Womes-Running-Shoes (3).webp']
            },
            4: {
                mainPic: 'Explore-.webp', allPics:
                    ['Explore-.webp', 'Explore-NITRO-Mid-Men-Hiking-Shoes (1).webp', 'Explore-NITRO-Mid-Men2.webp']
            },
            5: {
                mainPic: 'Fast-Trac-NITRO-.webp', allPics:
                    ['Fast-Trac-NITRO-.webp', 'Fast-Trac-NITRO-Men-Running-Shoes (1).webp', 'Fast-Trac-NITRORunning-Shoes (2).webp']
            },
            6: {
                mainPic: 'ForeverRU.webp', allPics:
                    ['ForeverRU.webp', 'ForeverRUN-NITR-Running-Shoes (1).webp', 'ForeverRUN-NITRRunning-Shoes (2).webp']
            },

        }
    },
    {
        name: 'NewBalance', price: 15, addresses: {
            1: {
                mainPic: 'm990gl5_nb_02_i.webp', allPics:
                    ['m990gl5_nb_02_i.webp', 'm990gl5_nb_03_i.webp', 'm990gl5_nb_04_i.webp']
            },
            2: {
                mainPic: 'm1080scb_nb_02_i.webp', allPics:
                    ['m1080scb_nb_02_i.webp', 'm1080scb_nb_04_i.webp', 'm1080scb_nb_05_i.webp']
            },
            3: {
                mainPic: 'mfcxcp3_nb_02_i.webp', allPics:
                    ['mfcxcp3_nb_02_i.webp', 'mfcxcp3_nb_02_i.webp', 'mfcxcp3_nb_04_i.webp']
            },
            4: {
                mainPic: 'mmorcw4_nb_02_i.webp', allPics:
                    ['mmorcw4_nb_02_i.webp', 'mmorcw4_nb_04_i.webp', 'mmorcw4_nb_05_i.webp']
            },
            5: {
                mainPic: 'mrbltlk1_nb_02_i.webp', allPics:
                    ['mrbltlk1_nb_02_i.webp', 'mrbltlk1_nb_03_i.webp', 'mrbltlk1_nb_05_i.webp']
            },
            6: {
                mainPic: 'mrcelcd3_nb_02_i.webp', allPics:
                    ['mrcelcd3_nb_02_i.webp', 'mrcelcd3_nb_03_i.webp', 'mrcelcd3_nb_04_i.webp', 'mrcelcd3_nb_05_i.webp', 'mrcelcd3_nb_07_i.webp']
            },
            7: {
                mainPic: 'mrcelle3_nb_02_i.webp', allPics:
                    ['mrcelle3_nb_02_i.webp', 'mrcelle3_nb_03_i.webp', 'mrcelle3_nb_04_i.webp', 'mrcelle3_nb_05_i.webp', 'mrcelle3_nb_07_i.webp', 'mrcelle3_nb_12_i.webp', 'mrcelle3_nb_15_i.webp']
            },
            8: {
                mainPic: 'mroavbn_nb_02_i.webp', allPics:
                    ['mroavbn_nb_02_i.webp', 'mroavbn_nb_04_i.webp', 'mroavbn_nb_05_i.webp']
            },
            9: {
                mainPic: 'mvngocd5_nb_02_i.webp', allPics:
                    ['mvngocd5_nb_02_i.webp', 'mvngocd5_nb_04_i.webp', 'mvngocd5_nb_05_i.webp', 'mvngocd5_nb_07_i.webp']
            },
        }
    },
]


export { productTypes, sportCompanys, productsAdresses ,allProduct }



























