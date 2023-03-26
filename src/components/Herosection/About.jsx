import React from 'react'
import "./About.css"


function About() {
  return (
    <div className='About'>
      <div className="About-paragraf">
        <h1 className='About-paragraf-header'>Halısaha nedir</h1>
        <p>Halısaha; halı saha spor merkezlerinin rezervasyon ve muhasebelerini kolaylıkla yönetebileceği ve uygulama üzerinden rezervasyon alabilecekleri bir sistemdir.  listeleme ve reklam özellikleri sayesinde boş saatlerini kolaylıkla doldurabilirler! Siz de işletmenizi Halısaha'ya taşımayı düşünüyorsanız hemen bizimle iletişime geçin!</p>
      </div>
      <div className="About-card-container">
        
        <div className='About-card'><img src={require("../../assets/icons/reservation-icon.png")} alt="reservation-icon" /><p>Halısaha ile sahanızın çalışma saatlerini ekleyebilir, düzenleyebilir ve sporcuların pratik bir şekilde rezervasyon yapmasını sağlayabilirsiniz.</p></div>
        <div className='About-card'><img src={require("../../assets/icons/reservation-icon.png")} alt="reservation-icon" /><p>Halısaha ile işletmenize özel olarak oluşturulan profiller ve özel promosyonlarla rakiplerinizden ayrışarak işletmenizin bilinirliğini aldığınız geri dönüşler ile arttırabilirsiniz.</p></div>
      </div>
    </div>
  )
}

export default About