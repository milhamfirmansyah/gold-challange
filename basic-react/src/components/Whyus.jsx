import React from "react";
import "./whyus.css"

function Whyus() {
    const reasonData = [
        {
            icon: <i class="bi bi-hand-thumbs-up"></i>,
            heading: 'Mobil Lengkap',
            detail: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat',
            iconBackground: 'icon-background-1',
        },
        {
            icon: <i class="bi bi-tag"></i>,
            heading: 'Harga Murah',
            detail: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain',
            iconBackground: 'icon-background-2',
        },
        {
            icon: <i class="bi bi-clock"></i>,
            heading: 'Layanan 24 Jan',
            detail: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu',
            iconBackground: 'icon-background-3',
        },
        {
            icon: <i class="bi bi-award"></i>,
            heading: 'Sopir Profesional',
            detail: 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu',
            iconBackground: 'icon-background-4',
        },
    ];


    const reason = reasonData.map((item) => (
        <div className="reason-border">
            <div className={item.iconBackground}>
                <div>{item.icon}</div>
            </div>
            <p className="reason-heading">{item.heading}</p>
            <p className="reason-detail">{item.detail}</p>
        </div>
    ));

    return (
        <div className="why-us-wrapper">
            <div className="why-us-container">
                <h3>Why Us?</h3>
                <p className="why-binar">Mengapa harus pilih Binar Car Rental?</p>
                <div className="reason-container">
                    {reason}
                </div>
            </div>
        </div>
    );
};

export default Whyus