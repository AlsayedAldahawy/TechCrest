import mobilesModel from '../models/mobileModel';


export const getAllMobiles = async() => {
    return await mobilesModel.find()
}

export const seedInitialMobiles = async () => {
    const products = [
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-iphone-13-256g-blue-1_1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-iphone-13-256g-blue-2_1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-iphone-13-256g-blue-3_1.jpg",
        title: "Apple Iphone 13 128GB - Blue",
        details: "Apple Iphone 13 128GB - Blue, 6.1 Inch OLED, 4 GB RAM, Battery 3240 mAh, Back Camera 12 + 12 MP",
        price: 29000,
        stock: 50,
        ram: "4GB",
        brand: "apple"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_iphone_15_pro_8gb_ram_128gb_-_blue_titanium-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_iphone_15_pro_8gb_ram_128gb_-_blue_titanium-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_iphone_15_pro_8gb_ram_128gb_-_blue_titanium-3.jpg",
        title: "Apple iPhone 15 Pro 8GB RAM, 128GB - Blue Titanium",
        details: "Apple iPhone 15 Pro 8GB RAM, 128GB - Blue Titanium, 6.1 Inch OLED, Battery 3274 mAh, Back Camera 48 + 12 + 12 MP ",
        price: 52500,
        stock: 10,
        ram: "8GB",
        brand: "apple"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_iphone_14_6gb_ram_128gb_-_blue-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_iphone_14_6gb_ram_128gb_-_blue-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_iphone_14_6gb_ram_128gb_-_blue-3.jpg",
        title: "Apple iPhone 14 6GB RAM, 128GB - Blue",
        details: "Apple iPhone 14 6GB RAM, 128GB - Blue, 6.1 Inch OLED, Battery 3279 mAh, Back Camera 12 + 12 MP",
        price: 34000,
        stock: 15,
        ram: "6GB",
        brand: "apple"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi-redmi-13-sandy-gold-99.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi-redmi-13-sandy-gold-0.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi-redmi-13-sandy-gold-2.jpg",
        title: "Xiaomi Redmi 13 8GB RAM , 256GB - Sandy Gold",
        details: "Xiaomi Redmi 13 8GB RAM, 256GB - Sandy Gold, 6.79 Inch, Back Camera 108+2 MP, Battery 5030 mAh",
        price: 7900,
        stock: 20,
        ram: "8GB",
        brand: "xiaomi"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi_poco_f6_12gb_ram_512gb_-_green-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi_poco_f6_12gb_ram_512gb_-_green-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi_poco_f6_12gb_ram_512gb_-_green-3.jpg",
        title: "Xiaomi Poco F6 12GB RAM, 512GB - Green",
        details: "Xiaomi Poco F6 12GB RAM, 512GB - Green, 6.67 Inch, Back Camera 50+8 MP, Battery 5000 mAh",
        price: 20700,
        stock: 25,
        ram: "12GB",
        brand: "xiaomi"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung-s23-ultra-_12_256_-green-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung-s23-ultra-_12_256_-green-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung-s23-ultra-_12_256_-green-3.jpg",
        title: "Samsung S23 Ultra 12GB Ram, 256GB - Green",
        details: "Samsung S23 Ultra 12GB Ram, 256GB - Green, 6.8 Inch, Back Camera 200+10+10+12 MP, Battery 5000 mAh",
        price: 39000,
        stock: 30,
        ram: "12GB",
        brand: "samsung"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_galaxy_a55_8gb_ram_256gb_-_awesome_navy-1_2.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_galaxy_a55_8gb_ram_256gb_-_awesome_navy-2_2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_galaxy_a55_8gb_ram_256gb_-_awesome_navy-3_2.jpg",
        title: "Samsung Galaxy A55 8GB RAM, 128GB - Awesome Navy",
        details: "Samsung Galaxy A55 8GB RAM, 128GB - Awesome Navy, 6.6 Inch, Back Camera 50+12+5 MP, Battery 5000 mAh",
        price: 18000,
        stock: 35,
         ram: "8GB",
        brand: "samsung"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/o/p/oppo_reno11_f_8gb_ram_256gb_-_blue-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/o/p/oppo_reno11_f_8gb_ram_256gb_-_blue-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/o/p/oppo_reno11_f_8gb_ram_256gb_-_blue-3.jpg",
        title: "Oppo Reno 11F 5G 8GB RAM, 256GB - Blue",
        details: "Oppo Reno 11F 5G 8GB RAM, 256GB - Blue, 6.7 Inch, Back Camera 64+8+2 MP, Battery 5000 mAh",
        price: 13000,
        stock: 40,
        ram: "8GB",
        brand: "oppo"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/o/p/oppo-a3x-nebula-red-3_3.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/o/p/oppo-a3x-nebula-red-0_3.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/o/p/oppo-a3x-nebula-red-1_3.jpg",
        title: "Oppo A3X 4GB Ram, 64GB - Nebula Red",
        details: "Oppo A3X 4GB Ram, 64GB - Nebula Red, 6.67 Inch, Back Camera 8 MP, Battery 5100 mAh",
        price: 5500,
        stock: 45,
        ram: "4GB",
        brand: "oppo"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_smart_8_x6525_4gb_ram_64gb_-_timber_black-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_smart_8_x6525_-timber_black-1_1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_smart_8_x6525_-timber_black-2_1.jpg",
        title: "Infinix Smart 8 X6525 4GB RAM, 64GB - Timber Black",
        details: "Infinix Smart 8 X6525 4GB RAM, 64GB - Timber Black, 6.6 Inch, Back Camera 13 + .08 MP, Battery 5000 mAh",
        price: 4300,
        stock: 50,
        ram: "4GB",
        brand: "infinix"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_hot_40i_x6528_4gb_ram_128gb_-_gold-1_3.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_hot_40i_x6528_4gb_ram_128gb_-_gold-2_3.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_hot_40i_x6528_4gb_ram_128gb_-_gold-4_3.jpg",
        title: "Infinix Hot 40i X6528 8GB Ram, 256GB - Gold",
        details: "Infinix Hot 40i X6528 8GB Ram, 256GB - Gold, 6.56 Inch, Back Camera 50 + .08 MP, Battery 5000 mAh",
        price: 6500,
        stock: 51,
        ram: "8GB",
        brand: "infinix"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/o/honor_x8b_8gb_ram_512gb_-_glamorous_green-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/o/honor_x8b_8gb_ram_512gb_-_glamorous_green-5.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/o/honor_x8b_8gb_ram_512gb_-_glamorous_green-4.jpg",
        title: "Honor X8b 8GB RAM, 512GB - Glamorous Green",
        details: "Honor X8b 8GB RAM, 512GB - Glamorous Green, 6.7 Inch, Back Camera 108+5+2 MP, Battery 4500 mAh",
        price: 12500,
        stock: 52,
        ram: "8GB",
        brand: "honor"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/o/honor-200-pro-white-g.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/o/honor-200-pro---moonlight-white.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/o/honor-200-pro---moonlight-white-0.jpg",
        title: "Honor 200 PRO 5G 12GB Ram, 512GB - Moonlight White",
        details: "Honor 200 PRO 5G 12GB Ram, 512GB - Moonlight White, 6.78 Inch, Back Camera 50+50+12 MP, Battery 5200 mAh",
        price: 31000,
        stock: 53,
        ram: "12GB",
        brand: "honor"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/r/e/realme_12_pro_plus_12gb_ram_512gb_-_submarine_blue-0_2.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/r/e/realme_12_pro_plus_12gb_ram_512gb_-_submarine_blue-3_1_2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/r/e/realme_12_pro_plus_12gb_ram_512gb_-_submarine_blue-2_1_2.jpg",
        title: "Realme 12 Pro Plus 5G 12GB RAM, 512GB - Submarine Blue",
        details: "Realme 12 Pro Plus 5G 12GB RAM, 512GB - Submarine Blue, 6.7 Inch, Back Camera 50+64+8 MP, Battery 5000 mAh",
        price: 18900,
        stock: 40,
        ram: "12GB",
        brand: "realme"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_nova_12i-green-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_nova_12i-green-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_nova_12i-green-3.jpg",
        title: "Huawei Nova 12i 8GB RAM, 256GB - Green + FreeLace Buds",
        details: "Huawei Nova 12i 8GB RAM, 256GB - Green + FreeLace Buds, 6.7 Inch, Back Camera 108+2 MP, Battery 5000 mAh",
        price: 11000,
        stock: 52,
        ram: "8GB",
        brand: "huawei"
      },
      
        ];
        const existedMobiles = await getAllMobiles();
    if (existedMobiles.length === 0) {
        await mobilesModel.insertMany(products)
    }
}