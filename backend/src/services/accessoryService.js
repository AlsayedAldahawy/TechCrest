import accessoriesModel from '../models/accessoriesModel.js';


export const getAllAccessories = async() => {
    return await accessoriesModel.find()
}

export const seedInitialAccessories = async () => {
    const products = [
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/1/_/1_114.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/2/_/2_110.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/3/_/3_109.jpg",
        title: "Xiaomi Wired Earphone",
        details: "Xiaomi Wired Earphone - Matte Black, Model: QTEJ02JY, Microphone, Line Length: 1.25M",
        price: 400,
        stock: 40,
        brand: "Xiaomi"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_300_wireless_compact_mouse_gx30k79401_-_black.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_300_wireless_compact_mouse_gx30k79401_-_black-4.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_300_wireless_compact_mouse_gx30k79401_-_black-1.jpg",
        title: "Lenovo 300 Wireless Compact Mouse GX30K79401",
        details: "Lenovo 300 Wireless Compact Mouse GX30K79401 - Black, Connection Type:2.4 GHz Wireless via Nano USB, Mouse Sensor:Optical sensor",
        price: 550,
        stock: 33,
        brand: "lenovo"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/n/anker_type-c_to_type-c_cable_100w_braided_ultra_a8757h11_-_black_-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/n/anker_type-c_to_type-c_cable_100w_braided_ultra_a8757h11_-_black_-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/n/anker_type-c_to_type-c_cable_100w_braided_ultra_a8757h11_-_black_-2.jpg",
        title: "Anker Type-C to Type-C Cable",
        details: "Anker Type-C to Type-C Cable 100W Braided Ultra A8756H11 - Black, Power: 100W",
        price: 600,
        stock: 30,
        brand: "anker"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/p/speaker-soundcore-wireless-flare-2-a3165h11-anker-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/n/anker_speaker_sound_core_wireless_flare_2_a3165h11-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/n/anker_speaker_sound_core_wireless_flare_2_a3165h11-3.jpg",
        title: "Anker SoundCore Flare2 Wireless Speaker",
        details: "SoundCore by Anker Flare2 Wireless Speaker - Black - A3165H11, Compatible With: All Laptop & Mobile Devieces, Play Time: Up to 12 hrs",
        price: 2100,
        stock: 20,
        brand: "anker"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/p/iphone-12_12-pro-screen-nillkin-2-in-1-orginal-1_1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/p/iphone-12_12-pro-screen-nillkin-2-in-1-orginal-2_1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/p/iphone-12_12-pro-screen-nillkin-2-in-1-orginal-3_1.jpg",
        title: "Nillkin Iphone 12 Pro Max Screen 2 IN 1",
        details: " Full-screen tempered glass + Camera protective film protective set is specially designed for iPhone 12 series.",
        price: 470,
        stock: 200,
        brand: "apple"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/hub-usb-7-in-1-a8352ha1-grey-anker-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/hub-usb-7-in-1-a8352ha1-grey-anker-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/hub-usb-7-in-1-a8352ha1-grey-anker-3.jpg",
        title: "Anker Hub USB 7 In 1",
        details: "Enjoy high-speed pass-through charging while using. Maximum input of 60W minus 12W for the hub is operation allows the hub to give your MacBook up to an 48W pass-through charge while using other functions.",
        price: 1700,
        stock: 16,
        brand: "anker"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/n/anker_home_adapetr_313_fast_charger_45w_a2643g11_-_black-11.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/n/anker_home_adapetr_313_fast_charger_45w_a2643g11_-_black-12.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/n/anker_home_adapetr_313_fast_charger_45w_a2643g11_-_black-13.jpg",
        title: "Anker Home Adapter A2643G11",
        details: "Anker Home Adapter 313 Fast Charger 45W A2643G11 - Black",
        price: 1300,
        stock: 13,
        brand: "anker"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/c/h/charger-car-typ-c-ep-l1100-30w_15w-black-samsung-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/c/h/charger-car-typ-c-ep-l1100-30w_15w-black-samsung-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/c/h/charger-car-typ-c-ep-l1100-30w_15w-black-samsung-3.jpg",
        title: "Samsung Charger Car Type-C 15W",
        details: "Samsung Charger Car Type-C EP-L1100 - Black, 30W Dual, 15W Single Max Output, Dual Port, Blue LED Light, Metal + PC Outer Shell ",
        price: 970,
        stock: 44,
        brand: "samsung"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/c/scanner-lide-400-emea_5ez-one-touch-buttons-usb-type-c-kan-s85129-black-canon-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/c/scanner-lide-400-emea_5ez-one-touch-buttons-usb-type-c-kan-s85129-black-canon-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/c/scanner-lide-400-emea_5ez-one-touch-buttons-usb-type-c-kan-s85129-black-canon-3.jpg",
        title: "Canon Scanner Lide 400 EMEA",
        details: "Canon Scanner Lide 400 EMEA ( 5EZ One Touch Buttons USB Type-C - Black, scan Resolution: 4800 x 4800dpi, scan Speed: Scan speed (A4, 300dpi, Colour) Approx. 8 sec,Scan speed (4x6, 300dpi, Colour)Approx. 4 sec, Preview SpeedApprox. 7 sec",
        price: 4600,
        stock: 34,
        brand: "canon"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/c/a/canon-pixma-ts3440-wireless-inkjet-printer-.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/p/r/printer-pixma-wireless-printer_---ts3440-black-3.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/p/r/printer-pixma-wireless-printer_---ts3440-black-2.jpg",
        title: "Canon Pixma Wireless Inkjet Printer",
        details: "Canon Pixma TS3440 Wireless Inkjet Printer, Paper Input: Rear tray: Max. 60 sheets (plain paper), Print Speed: Borderless 10x15cm : Approx. 65 seconds, Print Resolution: Up to 4800 x 1200 dpi",
        price: 2000,
        stock: 12,
        brand: "canon"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/c/a/canon-ink-bottle---gi-43-c-.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/c/a/canon-ink-bottle---gi-43-c-.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/c/a/canon-ink-bottle---gi-43-c-.jpg",
        title: "Canon GI-43 C Ink Bottle",
        details: "Canon GI-43 C Ink Bottle - Cyan, Compatibility: PIXMA G640, PIXMA G540, Capacity: 60 ml",
        price: 725,
        stock: 66,
        brand: "canon"
      },
        ];


const existedAccessories = await getAllAccessories();
    if (existedAccessories.length === 0) {
        await accessoriesModel.insertMany(products)
    }
}