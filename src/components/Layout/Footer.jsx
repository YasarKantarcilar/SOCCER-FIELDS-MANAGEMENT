import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div className='Footer'>
            <div className="Footer-info-container">
                <div className="Footer-mail">
                    <span className="Footer-icon">
                        <i className="fa fa-envelope fa-2xl"></i>
                    </span>
                    <p>xxxx@infoxxx.com</p>
                </div>
                <div className="Footer-fast-links">
                    <p className='Footer-header'>HIZLI BAGLANTILAR</p>
                    <ul>
                        <li><a href="/">Ana sayfa</a></li>
                        <li><a href="/">Hakkımızda</a></li>
                        <li><a href="/">Giriş yap</a></li>
                        <li><a href="/">Kayıt ol</a></li>
                        <li><a href="/">S.S.S</a></li>
                    </ul>
                </div>
                {/* <div className="Footer-input-container">
                    <form className='Footer-form' action="/" method="post">
                        <p>YENILIKLERDEN HABERDAR OLMAK ICIN E POSTANIZI KAYIT EDIN </p>
                        <div className='Footer-form-container'>
                            <label className='Footer-form-label' htmlFor="email">E-mail</label>
                            <input className='Footer-input' type="text" name='email' id='email' placeholder='E-mail'/>
                            <button className='Footer-email-submit-button' type='submit'><span className='Footer-email-submit'><i className="fa-solid fa-arrow-right fa-xl"></i></span></button>
                        </div>
                    </form>
                </div> */}
                <div className="Footer-social-media">
                <p className='Footer-social-paragraph'>BIZI TAKIP EDIN</p>
                <div className='Footer-icons'>
                    <a href="/"><span className='Footer-icon'><i className="fa-brands fa-twitter fa-xl"></i></span></a>
                    <a href="/"><span className='Footer-icon'><i className="fa-brands fa-instagram fa-xl"></i></span></a>
                    <a href="/"><span className='Footer-icon'><i className="fa-brands fa-facebook fa-xl"></i></span></a>
                </div>


            </div>
            </div>
            
        </div>
    )
}

export default Footer