import tabletsModel from '../models/tabletModel.js';


export const getAllTablets = async() => {
    return await tabletsModel.find()
}

export const seedInitialTablets = async () => {
    const products = [
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_ipad_10.9_22_10_gen_64gb_wi-fi_cellular_-_blue-1_1_2.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_ipad_10.9_22_10_gen_256gb_wi-fi_cellular_-_blue-3_4.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_ipad_10.9_22_10_gen_256gb_wi-fi_cellular_-_blue-6_4.jpg",
        title: "Apple iPad 10.9 inch",
        details: "Apple iPad 10.9 inch, 10th Generation, 64GB Memory (Wi-Fi Only) - Blue",
        price: 22000,
        stock: 100,
        ram: "4GB",
        brand: "apple"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-ipad-10.2-64g-wifi-_9generaition_-space-gray-.e-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_ipad_10.2_64gb_wi-fi_9_generaition_-_space_gray-3.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_ipad_10.2_64gb_wi-fi_9_generaition_-_space_gray-4.jpg",
        title: "Apple iPad 10.2 inch",
        details: "Apple iPad 10.2 inch, 64GB, Wi-Fi - (9th Generation) - Gray",
        price: 16333,
        stock: 95,
        ram: "3GB",
        brand: "apple"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_galaxy_tab_a9_8gb_ram_128gb_-_navy-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_galaxy_tab_a9_8gb_ram_128gb_-_navy-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_galaxy_tab_a9_8gb_ram_128gb_-_navy-3.jpg",
        title: "Samsung Galaxy Tab A9",
        details: "Samsung Galaxy Tab A9 8GB RAM, 128GB - Navy",
        price: 10000,
        stock: 90,
        ram: "8GB",
        brand: "samsung"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung-galaxy-tab-s9-fe_-gray-5.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung-galaxy-tab-s9-fe_-gray-6.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung-galaxy-tab-s9-fe_-gray-2.jpg",
        title: "Samsung Galaxy Tab S9 FE+",
        details: "Samsung Galaxy Tab S9 FE+ (5G) 12GB Ram, 256GB - Gray",
        price: 34500,
        stock: 85,
        ram: "12GB",
        brand: "samsung"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_matepad_11.5_22_s_8gb_ram_256gb_-_space_gray_pen_free_buds_5i_-0.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_matepad_11.5_22_s_8gb_ram_256gb_-_space_gray_pen_free_buds_5i_-3.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_matepad_11.5_22_s_8gb_ram_256gb_-_space_gray_pen_free_buds_5i_-2.jpg",
        title: "HUAWEI MatePad 11.5",
        details: "HUAWEI MatePad 11.5- S 8GB RAM, 256GB - Space Gray (Pen+Free Buds 5I)",
        price: 24666,
        stock: 80,
        ram: "8GB",
        brand: "huawei"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_matepad_11.5_22_8gb_ram_256gb_-_space_gray-0_1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_matepad_11.5_22_8gb_ram_256gb_-_space_gray-1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_matepad_11.5_22_8gb_ram_256gb_-_space_gray-2.jpg",
        title: "Huawei MatePad 11.5",
        details: "Huawei MatePad 11.5- 8GB RAM, 256GB - Space Gray ( Free Pen )",
        price: 19777,
        stock: 75,
        ram: "8GB",
        brand: "huawei"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_tab_m10_plus_3gen_4gb_ram_128gb_-_storm_grey_pen_2_folio_case_-1_1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_tab_m10_plus_3rd_gen_4gb_ram_128gb_-_storm_grey-1_1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_tab_m10_plus_3gen_4gb_ram_128gb_-_storm_grey_pen_2_folio_case_-2_1.jpg",
        title: "Lenovo Tab M10 Plus",
        details: "Lenovo Tab M10 Plus (3Gen) 4GB RAM, 128GB - Storm Grey + (Pen 2 + Folio Case)",
        price: 12777,
        stock: 70,
        ram: "4GB",
        brand: "lenovo"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_tab_p12_8gb_ram_128gb_-_storm_grey_-_wifi-only-0_2.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_tab_p12_8gb_ram_128gb_-_storm_grey_-_wifi-only-1_2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_tab_p12_8gb_ram_128gb_-_storm_grey_-_wifi-only-3_2.jpg",
        title: "Lenovo Tab P12",
        details: "Lenovo Tab P12 8GB RAM, 256GB - Storm Grey - WIFI-Only + (Pen Plus)",
        price: 19555,
        stock: 65,
        ram: "8GB",
        brand: "lenovo"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/n/o/nokia_tab_t10_ta-1530_4gb_ram_64gb_-_ocean_blue-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/n/o/nokia_tab_t10_ta-1530_4gb_ram_64gb_-_ocean_blue-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/n/o/nokia_tab_t10_ta-1530_4gb_ram_64gb_-_ocean_blue-3.jpg",
        title: "Nokia Tab T10 TA-1530",
        details: "Nokia Tab T10 TA-1530 4GB RAM, 64GB - Ocean Blue",
        price: 4500,
        stock: 60,
        ram: "4GB",
        brand: "nokia"
      },
        ];


const existedTablets = await getAllTablets();
    if (existedTablets.length === 0) {
        await tabletsModel.insertMany(products)
    }
}