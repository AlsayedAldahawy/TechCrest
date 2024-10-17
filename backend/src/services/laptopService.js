import laptopsModel from '../models/laptopModel.js';


export const getAllLaptops = async() => {
    return await laptopsModel.find()
}

export const seedInitialLaptops = async () => {
    const products = [
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/eb4305db09fb6492bb059b8131f647e3/h/p/hp-laptop-i5-12450h--8g---512ssd---gtx1silver-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/p/hp-laptop-i5-12450h--.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/p/hp-victus-15-fa0031dx--0.jpg",
        title: "HP Victus 15-fa0031dx",
        details: "Hp Victus 15-fa0031dx Intel® Core™ i5-12450H, 8GB Ram, 512GB SSD, Nvidia GeForce GTX 1650, 15.6 inch FHD - Mica Silver",
        price: 35000,
        stock: 45,
        ram: "8GB",
        brand: "hp"

      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/s/asus-tuf-gaming-a15-fa506ncr-hn007w.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/s/asus-tuf-gaming-a15-fa506ncr-hn007w-0.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/s/asus-tuf-gaming-a15-fa506ncr-hn007w-1.jpg",
        title: "ASUS TUF Gaming A15",
        details: "Asus TUF Gaming A15 FA506NCR-HN007W - AMD Ryzen 7-7435HS , 8GB RAM , 512GB SSD , RTX 3050 4GB , 15.6'' FHD , Win11 - Black",
        price: 38900,
        stock: 60,
        ram: "8GB",
        brand: "assus"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo-83dv008ped-loq-1_1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo-83dv008ped-loq-4_1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo-83dv008ped-loq-2_1.jpg",
        title: "Lenovo LOQ 83GS008NED",
        details: "Lenovo 83GS008NED -LOQ Intel® Core™ i5-12450HX 8GB , 512GB SSD , RTX3050 , 15.6 FHD - Grey",
        price: 39000,
        stock: 80,
        ram: "8GB",
        brand: "lenovo"
      
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/p/hp-14-dv2006ne--000.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/p/hp-14-dv2006ne-.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/p/hp-14-dv2006ne-00.jpg",
        title: "HP Pavilion 14-dv2006ne",
        details: "HP Pavilion 14-dv2006ne Intel® Core™ i7-1255U -16GB RAM - 512GB - Nvidia GeForce MX550 2GB - 14.0” FHD - Win 11 - Silver",
        price: 50400,
        stock: 50,
        ram: "16GB",
        brand: "hp"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/s/asus-x1605va-mb005wintel_-core_-i5-13500h-z.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/s/asus-laptop-i5-13700h--8g---512-ssd-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/s/asus-laptop-i5-13700h--8g---512-ssd-3.jpg",
        title: "Asus X1605VA",
        details: "Asus X1605VA-MB005WIntel® Core™ i5-13500H, 8GB Ram, 512GB SSD, Intel UHD Graphics, 16.0 WUXGA, Win 11 - Indie Black",
        price: 28800,
        stock: 55,
        ram: "8GB",
        brand: "assus"
      },
      
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-macbook-air-13-m1-chip-8_core-cpu-and-7_core-gpu-256gb-storage-space-gray-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-macbook-air-13-m1-chip-8_core-cpu-and-7_core-gpu-256gb-storage-space-gray-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-macbook-air-13-m1-chip-8_core-cpu-and-7_core-gpu-256gb-storage-space-gray-5.jpg",
        title: "Apple MacBook Air M1",
        details: "Apple Macbook Air M1 Chip 13 inch 8 Core CPU & 7 Core GPU 8GB RAM 8GB 256GB - Space Gray",
        price: 44600,
        stock: 65,
        ram: "8GB",
        brand: "apple"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-macbook-pro-14.2_-m3-pro-18g-512g-ssd-silver-4_1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-macbook-pro-14.2_-m3-pro-18g-512g-ssd-silver-6_1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-macbook-pro-14.2_-m3-pro-18g-512g-ssd-silver_1.jpg",
        title: "Apple MacBook M3 Pro",
        details: "Apple MacBook M3 Pro 18GB , 512G SSD - 14.2inch - Silver",
        price: 135000,
        stock: 70,
        ram: "18GB",
        brand: "apple"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/8/2/82nk002yed-0.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo-yoga-slim-7-pro-amd-ryzen_7-5800hs--000_1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo-yoga-slim-7-pro-amd-ryzen_7-5800hs-_1.jpg",
        title: "Lenovo Yoga Pro Slim 7",
        details: "Lenovo Yoga Slim 7 Pro 82NK002YED , AMD Ryzen™7 5800HS - 16GB - 1TB SSD - NVIDIA® GeForce® MX450 - 14″ 2.8K - Win 11 - Slate Grey",
        price: 44000,
        stock: 75,
        ram: "16GB",
        brand: "lenovo"
      },
      
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/d/e/dell-vostro-3520-e003_1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/d/e/dell-vostro-3520-e003--0_1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/d/e/dell-vostro-3520-e003-000_1.jpg",
        title: "Dell Vostro 3520",
        details: "Dell Vostro 3520 Intel® Core™i5-1235U , 8GB RAM , 256GB ٍ intel UHD , 15.6FHD - Black",
        price: 21500,
        stock: 85,
        ram: "8GB",
        brand: "dell"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/d/e/dell-latitude-3420.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/d/e/dell-latitude-3420-0.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/d/e/dell-latitude-3420-1.jpg",
        title: "Dell Latitude 3420",
        details: "Dell Latitude 3420 Intel® Core™i5-1135G7 , RAM 8GB , 256GB SSD , Intel® Iris® Xe -14 FHD -Black",
        price: 25600,
        stock: 90,
        ram: "8GB",
        brand: "dell"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/m/s/msi-katana-15-b13vgk--6.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/m/s/msi-katana-15-b13vgk--0.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/m/s/msi-katana-15-b13vgk--3.jpg",
        title: "MSI Katana 15 B13VGK",
        details: "MSI Katana 15 B13VGK Intel® Core™ i7-13620H , 16GBRAM , 512 GB SSD , RTX 4070 , 15.6 QHD , Win 11- Black",
        price: 71900,
        stock: 95,
        ram: "16GB",
        brand: "msi"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/m/s/msi-modern-15-h-0.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/m/s/msi-modern-15-h-1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/m/s/msi-modern-15-h-2.jpg",
        title: "MSI Modern 15 H",
        details: "MSI Modern 15 H Intel® Core™i7-13620H , 8GBRam , 512 GB SSD , Iris Xe , 15.6 FHD - Black",
        price: 29700,
        stock: 100,
        ram: "8GB",
        brand: "msi"
      },
        ];


const existedLaptops = await getAllLaptops();
    if (existedLaptops.length === 0) {
        await laptopsModel.insertMany(products)
    }
}