import wearableModel from '../models/wearableModel';


export const getAllWearable = async() => {
    return await wearableModel.find()
}

export const seedInitialWearable = async () => {
    const products = [
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/r/e/redmi_watch_2_lite-11.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/r/e/redmi_watch_2_lite-14.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/r/e/redmi_watch_2_lite-12.jpg",
        title: "Redmi Watch 2 Lite 1.55",
        details: "Redmi Watch 2 Lite 1.55 - Blue, Compatible with: Android 6.0, iOS 10.0 and Later, Battery: 262 mAh, Play Time: Up to 10 days",
        price: 2000,
        stock: 55,
        brand: "xiaomi"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei-watch-fit-2-_1.74-_inch-yda-b09s-pink-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei-watch-fit-2-_1.74-_inch-yda-b09s-pink-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei-watch-fit-2-_1.74-_inch-yda-b09s-pink-3.jpg",
        title: "Huawei Watch Fit 2 1.74",
        details: "Huawei Watch Fit 2 1.74 - Pink, Compatible with: IOS 9.0 & Android 6.0, Play Time: Up to 10 days",
        price: 5500,
        stock: 9,
        brand: "huawei"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_watch_series_9_45mm_-_midnight-3_1.png",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_watch_series_9_45mm_-_midnight-4_1.png",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_watch_series_9_45mm_-_midnight-4_1.png",
        title: "Apple Watch Series 9",
        details: "Apple Watch Series 9 (45MM) - Midnight, Play Time: Up to 36 hrs, Compatible with: Apple iPhone Xs or later with iOS 17 or later",
        price: 21000,
        stock: 77,
        brand: "apple"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_watch_gt4_sport_46mm_-_black-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_watch_gt4_sport_46mm_-_black-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_watch_gt4_sport_46mm_-_black-3.jpg",
        title: "Huawei Watch GT4 Sport (46MM)",
        details: "Huawei Watch GT4 Sport (46MM) - Black, Compatible with: Android 8.0, iOS 13.0 or later, Play Time: Up to 14 days",
        price: 9600,
        stock: 99,
        brand: "huawei"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huwwwwb-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huwwwwb-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huwwwwb-4.jpg",
        title: "Huawei Watch GT5 (46MM)",
        details: "Huawei Watch GT5 (46MM) - Brown, System Requirements: Android 9.0 or later - iOS 13.0 or later, Play Time: 14-day battery life for maximum usage",
        price: 12000,
        stock: 44,
        brand: "huawei"  
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_smart_watch_xw1_-_black-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_smart_watch_xw1_-_black-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_smart_watch_xw1_-_black-1.jpg",
        title: "INFINIX XW1 Smart Watch1",
        details: "INFINIX XW1 Smart Watch1 - Black, Display: 1.83 Inch TFT, Battery: 280mAh, Play Time: Up to 7 Days, Compatible with: Android , iOS",
        price: 1250,
        stock: 55,
        brand: "infinix"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_band_9_1.47_inch_-_blue-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_band_9_1.47_inch_-_blue-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_band_9_1.47_inch_-_blue-3.jpg",
        title: "Huawei Band 9 (1.47 Inch)",
        details: "Huawei Band 9 (1.47 Inch) - Blue, Compatible with: Android 8.0 & iOS 13.0 or Later, Battery Capacity: Up to 14 days",
        price: 2200,
        stock: 6,
        brand: "huawei" 
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_smart_watch_fit3_sm-r390_-_gray-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_smart_watch_fit3_sm-r390_-_gray-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_smart_watch_fit3_sm-r390_-_gray-4.jpg",
        title: "Samsung Smart Watch Fit3 ",
        details: "Samsung Smart Watch Fit3 SM-R390 - Gray, Play Time: Up to 13 days, Display: 1.6 Inch, Battery: 208 mAh",
        price: 2900,
        stock: 55,
        brand: "samsung"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi_redmi_smart_watch_s3_-_silver-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi_redmi_smart_watch_s3_-_silver-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi_redmi_smart_watch_s3_-_silver-3.jpg",
        title: "Xiaomi Redmi Smart Watch S3",
        details: "Xiaomi Redmi Smart Watch S3 - Silver, Battery: 486 mAh, Display: 1.43 Inch, Compatible with: IOS 12.0 or Android 6.0 and later",
        price: 7700,
        stock: 55,
        brand: "xiaomi"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/t/strap-fit-2-22mm-for-watch-gt3-_46mm_-gulf-_blue-orange_-huawie-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/t/strap-fit-2-22mm-for-watch-gt3-_46mm_-gulf-_blue-orange_-huawie-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/t/strap-fit-2-22mm-for-watch-gt3-_46mm_-gulf-_blue-orange_-huawie-3.jpg",
        title: "Huawei Strap Fit 2 22MM For Watch GT3 (46MM)",
        details: "Huawei Strap Fit 2 22MM For Watch GT3 (46MM) Blue - Orange, Compatibility: Huawei Watch GT3 (46mm)",
        price: 500,
        stock: 55,
        brand: "huawei"
      },
        ];


const existedWearable = await getAllWearable();
    if (existedWearable.length === 0) {
        await wearableModel.insertMany(products)
    }
}