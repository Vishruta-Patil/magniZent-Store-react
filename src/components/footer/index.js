import footerSocialLinksData from "../../data/footerSocialLinksData"

export const Footer = () => {
  return (
    <div>
      <div className="cart-footer flex-center flex-column" style={{position:"relative", bottom:0, left:0, right:0}}>
        <p className="">Made with <span className="primary-color footer-symbol"> &lt;/&gt; </span> by <a
          className="footer-linkedin-link" href="http://www.linkedin.com/in/vishruta-patil-30106b204">Vishruta Patil</a></p>
        <div className="social-links-container">
          <ul className="flex social-links-inner-container">
            {
              footerSocialLinksData.map((item,index) => (
                <li key={index}>
                  <a href={item.social_link} target="_blank"><i
                    class={`fab footer-social-icon ${item.class_name}`}></i></a>
                </li>
              ))
            }
          </ul>
        </div>
        <p className="copywrite-footer">© 2022 || magniZent</p>

      </div>
    </div>
  )
}
