import gamingModel from '../models/gamingModel.js';


export const getAllGaming = async() => {
    return await gamingModel.find()
}

export const seedInitialGaming = async () => {
    const products = [
        {
            image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/p/l/playstation-5_spider-man2-limited-edition-1.jpg",
            image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/p/l/playstation-5_spider-man2-limited-edition-2.jpg",
            image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/p/l/playstation-5_spider-man2-limited-edition-3.jpg",
            title: "Play Station 5 + Spider Man 2 limited Edition",
            details: "Play Station 5 + Spider Man 2 limited Edition, CPU:x86-64-AMD Ryzen “Zen 2”, Key Features: Experience lightning-fast loading Ultra-high-speed SSD Deeper immersion with support for haptic feedback, adaptive triggers 3D Audio technology",
            price: 50500,
            stock: 10,
          },
          {
            image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/p/l/playstation-5-slim-console-warranty-2-years-1.jpg",
            image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/p/l/playstation-5-one-year-warrantt-ibs-2_1_1.jpg",
            image3: "https://myxprs.com/cdn/shop/products/sony-playstation-5-slim-570862.png?v=1723625774&width=700",
            title: "PlayStation 5 Slim Console",
            details: "PlayStation 5 Slim Console, CPU:x86-64-AMD Ryzen “Zen 2”, Key Features: Experience lightning-fast loading Ultra-high-speed SSD Deeper immersion with support for haptic feedback, adaptive triggers 3D Audio technology. Color: White",
            price: 38000,
            stock: 20
          },
          {
            image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/p/spider_man_2_ps5_gaming_cd-2.jpg",
            image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/p/spider_man_2_ps5_gaming_cd-1.jpg",
            image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/p/spider_man_2_ps5_gaming_cd-1.jpg",
            title: "Spider man 2 PS5 Gaming CD",
            details: "Spider man 2 PS5 Gaming CD, Platform: Playstation 5, PEGI Rating: Ages 3 and Over",
            price: 4500,
            stock: 7
          },
          {
            image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/f/c/fc24_arabic_gaming_cd_ps5-2.jpg",
            image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/f/c/fc24_arabic_gaming_cd_ps5-2.jpg",
            image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/f/c/fc24_arabic_gaming_cd_ps5-2.jpg",
            title: "FC24 Arabic Gaming CD PS5",
            details: "FC24 Arabic Gaming CD PS5, Platform: Playstation 5, PEGI Rating: Ages 3 and Over",
            price: 2800,
            stock: 10
          },
          {
            image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/g/a/gaming-driving-car-wheel-with-pedals-v3-pro-black-pxn-1.jpg",
            image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/g/a/gaming-driving-car-wheel-with-pedals-v3-pro-black-pxn-2.jpg",
            image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/g/a/gaming-driving-car-wheel-with-pedals-v3-pro-black-pxn-3.jpg",
            title: "PXN V3 Pro Gaming Driving Car Wheel With Pedals - Black",
            details: "PXN V3 Pro Gaming Driving Car Wheel With Pedals - Black, Compatibility: Windows 7/8/10 / PC x-input i d-input / PS3 / PS4 / XBOX ONE / Nintendo Switch, ",
            price: 3400,
            stock: 20
          },
          {
            image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/g/a/gamepad-f710-wirless-white-logitech-1.jpg",
            image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/g/a/gamepad-f710-wirless-white-logitech-2.jpg",
            image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/g/a/gamepad-f710-wirless-white-logitech-3.jpg",
            title: "Logitech Gamepad F710 Wirless - Silver",
            details: "Logitech Gamepad F710 Wirless - Silver, Receiver: Nano USB, Wireless Range: 10 Meters, Connectivity: 2.4GHz Wireless.",
            price: 1750,
            stock: 55
          },
        ];


const existedGaming = await getAllGaming();
    if (existedGaming.length === 0) {
        await gamingModel.insertMany(products)
    }
}