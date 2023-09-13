import './Footer.scss'
import WecodeLogo from '../svg-components/WecodeLogo'
import Instagram from '../svg-components/Instagram'
import Facebook from '../svg-components/Facebook'
import Pinterest from '../svg-components/Pinterest'
import Twitter from '../svg-components/Twitter'
import TikTok from '../svg-components/TikTok'
import Linkedin from '../svg-components/Linkedin'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="top">
                <WecodeLogo
                    width={170}
                    height={50} />
                <p>©2023 Wecode Tecnologia para e-commerce ltda. Todos os direitos reservados.</p>
            </div>
            <div className="bottom">
                <div className="contact-icons">
                    <h3>Conecte-se conosco</h3>
                    <div className="icons">
                        <a href="https://www.instagram.com/" className='link' target='_blank'><Instagram fill='#2DB5D3' /></a>
                        <a href="https://www.facebook.com/wecode.digital/" className='link' target='_blank'><Facebook fill='#2DB5D3' /></a>
                        <a href="https://pinterest.com" className='link' target='_blank'><Pinterest fill='#2DB5D3' /></a>
                        <a href="https://twitter.com/" className='link' target="_blank"><Twitter fill='#2DB5D3' /></a>
                        <a href="https://www.tiktok.com/" className='link' target="_blank"><TikTok fill='#2DB5D3' /></a>
                        <a href="https://www.linkedin.com/company/wecodedigital/" className='link' target="_blank"><Linkedin fill='#2DB5D3' /></a>
                    </div>
                </div>
                <div className="sobre-wrap">
                    <div className="contact-wrap">
                        <h3>Sobre a empresa</h3>
                        <a href="#" className='link'>Quem somos</a>
                        <a href="#" className='link'>Fale conosco</a>
                        <a href="#" className='link'>Produção Nacional de Café</a>
                    </div>
                </div>
                    <div className="contact-wrap">
                        <h3>E-mail</h3>
                        <a href="mailto:ola@wecode.digital" className='link'>ola@wecode.digital</a>
                    </div>
                    <div className="contact-wrap">
                        <h3>Telefone</h3>
                        <p>+55 (54) 3028-9452</p>
                    </div>
                    <div className="contact-wrap">
                        <h3>Endereço</h3>
                        <p>Rua Independência, 2432 - sala 418
                            Caxias do Sul, RS - 95.082-380</p>
                    </div>

                <div className="contact-wrap">
                    <h3>Políticas</h3>
                    <a href="#" className='link'>Política de Privacidade</a><a href="#" className='link'>Termos de Uso</a><a href="#" className='link'>Política de Entrega</a><a href="#" className='link'>Política de Cupom e Descontos</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer