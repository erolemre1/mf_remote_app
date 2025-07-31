import React from "react";
import styles from "./Footer.module.js"
console.log("styles",styles);

const services = [
  {
    img: "//dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/magazadanteslimal.svg",
    alt: "Mağazadan Teslim Al",
    title: "Mağazadan Teslim Al",
    subTitle: "Kargo Bedava",
    link: "/statik/bi-tikla-magazada",
  },
  {
    img: "//dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/kapidaodeme.svg",
    alt: "Kapıda ödeme",
    title: "Kapıda ödeme",
    subTitle: "Hizmet bedeli sadece 29,99 TL",
    link: "/statik/kapida-nakit-odeme",
  },
  {
    img: "//dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/magazadandegisim.svg",
    alt: "Mağazada Değişim",
    title: "Mağazada Değişim & İade",
    subTitle: "Online al mağazada değiştir",
    link: "/statik/iade-degisim-islemleri",
  },
  {
    img: "//dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/iade.svg",
    alt: "Ücretsiz iade",
    title: "Ücretsiz iade",
    subTitle: "30 gün içerisinde iade et",
    link: "/statik/iade-degisim-islemleri",
  },
  {
    img: "//dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/gift.svg",
    alt: "GiftClub",
    title: "DeFacto Gift Club",
    subTitle: "Ayrıcalıklarla Yenilen, Eğlen, Devam Et!",
    link: "/giftclub",
  },
];

const footerData = [
  {
    title: "DeFacto",
    items: [
      { label: "Kurumsal", href: "https://kurumsal.defacto.com.tr" },
      { label: "Hakkımızda", href: "https://kurumsal.defacto.com.tr/hakkimizda.html" },
      { label: "İnsan Kaynakları", href: "https://kurumsal.defacto.com.tr/defactoda-hayat.html" },
      { label: "Kurumsal Satış", href: "/statik/hediye-cekleri", hideOnKiosk: true },
      { label: "Toptan Satış (Wholesale Partner)", href: "/statik/toptan-satis", hideOnKiosk: true },
      { label: "DeFacto Teknoloji", href: "https://www.defactoteknoloji.com.tr/" },
      { label: "Sitemap", href: "/statik/sitemap" },
      {
        label: (
          <>
            DeFacto Blog
            <span style={styles.newTag}>YENİ</span>
          </>
        ),
        href: "https://www.defacto.com.tr/blog",
      },
    ],
  },
  {
    title: "Yardım",
    items: [
      { label: "Sıkça Sorulan Sorular", href: "/statik/sikca-sorulan-sorular" },
      {
        label: (
          <>
            <img src="//dfcdn.defacto.com.tr/responsive/icon.png" alt="icon" width="16" height="16" />
            &nbsp; Siparişimi Nasıl Takip Ederim?
          </>
        ),
        href: "/statik/siparis-takip",
      },
      {
        label: (
          <>
            <img src="//dfcdn.defacto.com.tr/responsive/icon.png" alt="icon" width="16" height="16" />
            &nbsp; Nasıl İade Ederim?
          </>
        ),
        href: "/statik/iade-degisim-islemleri",
      },
      { label: "Yenilikler", href: "https://www.defacto.com.tr/yenilikler" },
      { label: "Gift Club Sıkça Sorulan Sorular", href: "https://www.defacto.com.tr/giftclub/sikca-sorulan-sorular" },
      { label: "İşlem Rehberi", href: "/statik/islem-rehberi" },
      { label: "Kampanyalar", href: "/statik/kampanyalar" },
      { label: "Kişisel Verilerin Korunması ve Gizlilik", href: "/statik/gizlilik-politikasi", hideOnKiosk: true },
    ],
  },
  {
    title: "Bize Ulaşın",
    items: [
      { label: "Mağazalarımız", href: "/magazalar" },
      { label: "İletişim Formu", href: "/kurumsal/iletisim" },
      {
        label: (
          <>
            Müşteri Hizmetleri<br />
            <a href="tel:08503332286">0850 333 22 86</a>
          </>
        ),
        href: null,
      },
    ],
  },
];

const socialLinks = [
  {
    href: "https://whatsapp.com/channel/0029VajNiMhLY6dAahyDU824",
    label: "WhatsApp",
    icon: "#icon-social-whatsapp",
  },
  {
    href: "https://www.facebook.com/DeFacto/",
    label: "Facebook",
    icon: "#icon-social-facebook",
  },
  {
    href: "https://x.com/defacto",
    label: "Twitter",
    icon: "#icon-social-x",
  },
  {
    href: "https://www.instagram.com/defacto/",
    label: "Instagram",
    icon: "#icon-social-instagram",
  },
  {
    href: "https://www.tiktok.com/@defacto?lang=tr-TR",
    label: "Tiktok",
    icon: "#icon-social-tiktok",
  },
];

export default function FooterServices() {
    if (typeof window === 'undefined') return null;
  return (
  <div>
      <div style={styles.container}>
      <div style={styles.footerServices}>
        {services.map((item, idx) => (
          <div
            style={styles.footerItem}
            key={idx}
          >
            <div style={styles.flex}>
              <img
                src={item.img}
                alt={item.alt}
                width={41}
                height={41}
                loading="lazy"
              />
              <div>
                <div style={styles.title}>{item.title}</div>
                <div style={styles.subTitle}>{item.subTitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
