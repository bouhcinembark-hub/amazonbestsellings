const affiliateID = "hoota-20";

// مثال على 10 منتجات dummy (يمكن تبدلهم كل يوم)
const productsData = [
  { title: "Wireless Headphones", price: "$59.99", image:"https://via.placeholder.com/300", url:"https://www.amazon.com/dp/B07XXXXXXX?tag="+affiliateID },
  { title: "Smartwatch", price: "$129.99", image:"https://via.placeholder.com/300", url:"https://www.amazon.com/dp/B07XXXXXXX?tag="+affiliateID },
  { title: "Bluetooth Speaker", price: "$39.99", image:"https://via.placeholder.com/300", url:"https://www.amazon.com/dp/B07XXXXXXX?tag="+affiliateID },
  { title: "Robot Vacuum", price: "$199.99", image:"https://via.placeholder.com/300", url:"https://www.amazon.com/dp/B07XXXXXXX?tag="+affiliateID },
  { title: "Fitness Tracker", price: "$49.99", image:"https://via.placeholder.com/300", url:"https://www.amazon.com/dp/B07XXXXXXX?tag="+affiliateID },
  { title: "Portable Charger", price: "$25.99", image:"https://via.placeholder.com/300", url:"https://www.amazon.com/dp/B07XXXXXXX?tag="+affiliateID },
  { title: "Drone Camera", price: "$299.99", image:"https://via.placeholder.com/300", url:"https://www.amazon.com/dp/B07XXXXXXX?tag="+affiliateID },
  { title: "Gaming Mouse", price: "$49.99", image:"https://via.placeholder.com/300", url:"https://www.amazon.com/dp/B07XXXXXXX?tag="+affiliateID },
  { title: "Laptop Stand", price: "$29.99", image:"https://via.placeholder.com/300", url:"https://www.amazon.com/dp/B07XXXXXXX?tag="+affiliateID },
  { title: "Coffee Maker", price: "$89.99", image:"https://via.placeholder.com/300", url:"https://www.amazon.com/dp/B07XXXXXXX?tag="+affiliateID }
];

const translations = {
  en: { top10: "Top 10 Best Sellers Today", buy: "Buy Now" },
  ar: { top10: "أفضل 10 مبيعاً اليوم", buy: "شري دابا" },
  es: { top10: "Top 10 más vendidos hoy", buy: "Comprar ahora" },
  fr: { top10: "Top 10 meilleures ventes aujourd'hui", buy: "Acheter" },
  zh: { top10: "今日十大畅销商品", buy: "立即购买" },
  de: { top10: "Top 10 Bestseller Heute", buy: "Jetzt kaufen" },
  pt: { top10: "Top 10 Mais Vendidos Hoje", buy: "Comprar" },
  ru: { top10: "Топ 10 продаж сегодня", buy: "Купить" },
  ja: { top10: "今日のトップ10ベストセラー", buy: "購入する" },
  hi: { top10: "आज के शीर्ष 10 बेस्ट सेलर", buy: "अब खरीदें" }
};

// عرض المنتجات
function renderProducts(lang="en") {
  document.getElementById("title").innerText = translations[lang].top10;
  const container = document.getElementById("products");
  container.innerHTML = "";
  productsData.forEach((p, idx)=>{
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="rank">#${idx+1}</div>
      <img src="${p.image}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.price}</p>
      <a href="${p.url}" target="_blank" rel="nofollow sponsored">${translations[lang].buy}</a>
    `;
    container.appendChild(card);
  });
}

// اختيار اللغة
document.getElementById("language").addEventListener("change", (e)=>{
  renderProducts(e.target.value);
});

// عرض أولي باللغة الانجليزية
renderProducts("en");
