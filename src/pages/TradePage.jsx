import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './TradePage.css'
import './PageTransition.css'

function TradePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const kecamatanData = {
    Makassar: ['Biringkanaya', 'Bontoala', 'Kepulauan Sangkarrang', 'Makassar', 'Mamajang', 'Manggala', 'Mariso', 'Panakkukang', 'Rappocini', 'Tallo', 'Tamalanrea', 'Tamalate', 'Ujung Pandang', 'Ujung Tanah', 'Wajo'],
    Gowa: ['Bajeng', 'Bajeng Barat', 'Barombong', 'Biringbulu', 'Bontolempangang', 'Bontomarannu', 'Bontonompo', 'Bontonompo Selatan', 'Bungaya', 'Manuju', 'Pallangga', 'Parangloe', 'Parigi', 'Pattallassang', 'Somba Opu', 'Tinggimoncong', 'Tombolopao', 'Tompobulu'],
    Maros: ['Mandai', 'Camba', 'Bantimurung', 'Maros Baru', 'Bontoa', 'Mallawa', 'Tanralili', 'Marusu', 'Simbang', 'Cenrana', 'Tompobulu', 'Lau', 'Moncongloe', 'Turikale']
  }

  const [selectedProduct, setSelectedProduct] = useState(null)
  const [orderForm, setOrderForm] = useState({
    name: '',
    company: '',
    deliveryMethod: '',
    location: '',
    kecamatan: '',
    desa: '',
    quantity: ''
  })
  const [formError, setFormError] = useState('')

  const handleOpenModal = (product) => {
    setSelectedProduct(product)
    setOrderForm({ name: '', company: '', deliveryMethod: '', location: '', kecamatan: '', desa: '', quantity: product.step || 1 })
    setFormError('')
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
  }

  const handleOrderSubmit = (e) => {
    e.preventDefault()

    // Validasi
    const qty = Number(orderForm.quantity)
    if (!qty || qty <= 0) {
      setFormError('Jumlah pesanan tidak valid.')
      return
    }

    if (selectedProduct.step && qty % selectedProduct.step !== 0) {
      setFormError(`Produk ini harus dipesan dalam kelipatan ${selectedProduct.step}.`)
      return
    }

    // Format WhatsApp
    const isDelivery = orderForm.deliveryMethod === 'antar'
    let lokasiText = ''
    if (isDelivery) {
      const jenisDesaKelurahan = orderForm.location === 'Makassar' ? 'Kelurahan' : 'Desa'
      const jenisKabKota = orderForm.location === 'Makassar' ? 'Kota' : 'Kabupaten'
      lokasiText = `- Metode: Diantar\n- Lokasi Pengiriman: ${jenisDesaKelurahan} ${orderForm.desa}, Kec. ${orderForm.kecamatan}, ${jenisKabKota} ${orderForm.location}`
    } else {
      lokasiText = `- Metode: Ambil Sendiri`
    }

    const text = `Halo,
Saya tertarik dengan produk *${selectedProduct.title}* yang ada di website.

*Detail Pemesanan:*
- Nama Pemesan: ${orderForm.name}
- Instansi/Perusahaan: ${orderForm.company}
${lokasiText}
- Jumlah Pesanan: ${orderForm.quantity} ${selectedProduct.unit}

Mohon informasi mengenai ketersediaan dan penawaran harga.`

    const waUrl = `https://wa.me/6285240800124?text=${encodeURIComponent(text)}`
    window.open(waUrl, '_blank')
    handleCloseModal()
  }


  const features = [
    { title: 'Sumber Tangan Pertama', desc: 'Model transaksi dari site-langsung-ke-industri memangkas biaya perantara agar kami siap menawarkan jangkauan harga komoditas yang paling bersaing.' },
    { title: 'Jaminan Kualitas', desc: 'Material melewati seleksi berlapis sesuai standar SNI & ISO dan tes lab kredibel sebelum dikapalkan menuju klien.' },
    { title: 'Logistik Terintegrasi', desc: 'Tidak perlu rumit. Kami mengatasi skema pemuatan (loading) dan manajemen pelabuhan (port) dengan jadwal terorganisir.' },
    { title: 'Kepatuhan & Legalitas', desc: 'Seluruh bisnis ini dilandasi oleh Izin Usaha Pertambangan formal serta mengikuti kepatuhan hukum yang berlaku kuat di Indonesia.' },
  ]

  const productsForSale = [
    {
      id: 1,
      image: '/batu_dijual.png',
      title: 'Batu Agregat (Split)',
      desc: 'Batu pecah (agregat) kualitas premium, ideal untuk bahan dasar konstruksi jalan, gedung, maupun kebutuhan sipil lainnya. Tahan terhadap pelapukan dan siap angkut dalam volume besar.',
      unit: 'm³ (Kubik)',
      step: 6,
      specs: [
        'Kuat tekan padat yang tinggi',
        'Bebas dari akar & lumpur limbah',
        'Densitas material seragam',
        'Cocok untuk lapisan pondasi (base)'
      ]
    },
    {
      id: 2,
      image: '/pasir_tanah_dijual.png',
      title: 'Pasir Tanah (Urugan)',
      desc: 'Pasir alami bercampur tanah yang sangat cocok untuk keperluan pemadatan fondasi lahan konstruksi atau reklamasi. Suplai terjamin konsisten langsung dari site tambang kami.',
      unit: 'm³ (Kubik)',
      step: 6,
      specs: [
        'Kadar tanah ideal pemadatan',
        'Mudah diratakan & dibentuk',
        'Kapasitas drainase yang baik',
        'Bebas dari sisa zat organik'
      ]
    }
  ]

  return (
    <div className="page page--trade">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="/hero-mining.png" alt="Trade Services" className="page-hero__img" />
          <div className="page-hero__overlay"></div>
        </div>
        <div className="page-hero__content container">
          <span className="page-hero__badge reveal delay-100">Perdagangan Mineral</span>
          <h1 className="page-hero__title reveal delay-200">Trade Service</h1>
          <p className="page-hero__desc reveal delay-300">
            Layanan suplai material tambang berkualitas tinggi dari sumber tepercaya. Kami memfasilitasi transaksi hasil bumi yang efisien untuk kebutuhan industri lokal maupun perniagaan global.
          </p>
        </div>
      </section>


      {/* Products For Sale */}
      <section className="tp-products">
        <div className="container">
          <div className="tp-products__header">
            <h2 className="section-title">Produk <span className="tp-accent">Tersedia</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Penawaran langsung komoditas hasil tambang untuk pembelian saat ini. Hubungi kami segera untuk kesepakatan lebih lanjut.
            </p>
          </div>

          <div className="tp-products__grid">
            {productsForSale.map((product, i) => (
              <div className={`tp-product-card reveal reveal--scale delay-${(i + 1) * 100}`} key={product.id}>
                <div className="tp-product-card__img-wrap">
                  <div className="tp-product-card__badge">Dijual</div>
                  <img src={product.image} alt={product.title} className="tp-product-card__img" />
                  <div className="tp-product-card__img-overlay"></div>
                </div>
                <div className="tp-product-card__body">
                  <h3 className="tp-product-card__title">{product.title}</h3>
                  <p className="tp-product-card__desc">{product.desc}</p>
                  <button
                    onClick={() => handleOpenModal(product)}
                    className="tp-product-card__btn"
                  >
                    Selengkapnya
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Platform Features */}
      <section className="tp-features">
        <div className="container">
          <div className="tp-features__header">
            <span className="section-badge">Keunggulan Kami</span>
            <h2 className="section-title">Mengapa Bermitra Dengan <span className="tp-accent">PT Geostone Khamilah Indonesia</span></h2>
          </div>
          <div className="tp-features__grid">
            {features.map((feat, i) => (
              <div className="tp-feature-card reveal delay-100" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="tp-feature-card__num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{feat.title}</h4>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {selectedProduct && typeof window !== 'undefined' && createPortal(
        <div className="tp-modal-overlay" onClick={handleCloseModal}>
          <div className="tp-modal" onClick={e => e.stopPropagation()}>
            <button className="tp-modal__close" onClick={handleCloseModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="tp-modal__header">
              <img src={selectedProduct.image} alt={selectedProduct.title} className="tp-modal__img" />
              <div className="tp-modal__title-area">
                <h3>{selectedProduct.title}</h3>
                <span className="tp-modal__badge">Form Pemesanan</span>
              </div>
            </div>

            <div className="tp-modal__content">
              <div className="tp-modal__specs">
                <h4>Spesifikasi Produk:</h4>
                <ul>
                  {selectedProduct.specs.map((spec, i) => (
                    <li key={i}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <form onSubmit={handleOrderSubmit} className="tp-modal__form">
                <div className="tp-form-group">
                  <label>Nama Anda</label>
                  <input
                    type="text"
                    required
                    value={orderForm.name}
                    onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div className="tp-form-group">
                  <label>Instansi / Perusahaan</label>
                  <select
                    required
                    value={orderForm.company}
                    onChange={(e) => setOrderForm({ ...orderForm, company: e.target.value })}
                  >
                    <option value="" disabled>Pilih Tipe / Nama Instansi</option>
                    <option value="Perorangan / Pribadi">Perorangan / Pribadi</option>
                    <option value="Instansi / Perusahaan Mitra">Instansi / Perusahaan Mitra</option>
                  </select>
                </div>

                <div className="tp-form-group">
                  <label>Metode Pengambilan</label>
                  <div className="tp-delivery-toggle">
                    <label
                      className={`tp-delivery-option${orderForm.deliveryMethod === 'ambil' ? ' tp-delivery-option--active' : ''}`}
                    >
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="ambil"
                        checked={orderForm.deliveryMethod === 'ambil'}
                        onChange={(e) => setOrderForm({ ...orderForm, deliveryMethod: e.target.value, location: '', kecamatan: '', desa: '' })}
                        required
                      />
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <div>
                        <span className="tp-delivery-option__title">Ambil Sendiri</span>
                        <span className="tp-delivery-option__desc">Ambil langsung di lokasi kami</span>
                      </div>
                    </label>
                    <label
                      className={`tp-delivery-option${orderForm.deliveryMethod === 'antar' ? ' tp-delivery-option--active' : ''}`}
                    >
                      <input
                        type="radio"
                        name="deliveryMethod"
                        value="antar"
                        checked={orderForm.deliveryMethod === 'antar'}
                        onChange={(e) => setOrderForm({ ...orderForm, deliveryMethod: e.target.value })}
                        required
                      />
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="3" width="15" height="13" />
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                      <div>
                        <span className="tp-delivery-option__title">Diantar</span>
                        <span className="tp-delivery-option__desc">Kami antar ke lokasi Anda</span>
                      </div>
                    </label>
                  </div>
                </div>

                {orderForm.deliveryMethod === 'antar' && (
                  <>
                    <div className="tp-form-group tp-form-group--animated">
                      <label>Lokasi Pengiriman</label>
                      <select
                        required
                        value={orderForm.location}
                        onChange={(e) => setOrderForm({ ...orderForm, location: e.target.value, kecamatan: '', desa: '' })}
                      >
                        <option value="" disabled>Pilih Kabupaten/Kota</option>
                        <option value="Gowa">Gowa</option>
                        <option value="Makassar">Makassar</option>
                        <option value="Maros">Maros</option>
                      </select>
                    </div>

                    <div className="tp-form-group tp-form-group--animated">
                      <label>Kecamatan</label>
                      <select
                        required
                        value={orderForm.kecamatan}
                        onChange={(e) => setOrderForm({ ...orderForm, kecamatan: e.target.value, desa: '' })}
                      >
                        <option value="" disabled>Pilih Kecamatan</option>
                        {kecamatanData[orderForm.location]?.map(kec => (
                          <option key={kec} value={kec}>{kec}</option>
                        ))}
                      </select>
                    </div>

                    <div className="tp-form-group tp-form-group--animated">
                      <label>Desa / Kelurahan</label>
                      <input
                        type="text"
                        required
                        value={orderForm.desa}
                        onChange={(e) => setOrderForm({ ...orderForm, desa: e.target.value })}
                        placeholder="Masukkan nama Desa / Kelurahan"
                      />
                    </div>
                  </>
                )}
                <div className="tp-form-group">
                  <label>Jumlah Pesanan ({selectedProduct.unit})</label>
                  <input
                    type="number"
                    required
                    min={selectedProduct.step}
                    step={selectedProduct.step}
                    value={orderForm.quantity}
                    onChange={(e) => setOrderForm({ ...orderForm, quantity: e.target.value })}
                  />
                  {selectedProduct.step > 1 && (
                    <span className="tp-form-hint">* Pembelian dalam kelipatan {selectedProduct.step} {selectedProduct.unit}</span>
                  )}
                </div>

                {formError && <div className="tp-form-error">{formError}</div>}

                <button type="submit" className="tp-modal__submit-btn">
                  Kirim Pesanan ke WhatsApp
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>,
        document.body
      )}

    </div>
  )
}

export default TradePage
