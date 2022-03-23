import footerSocialLinksData from "../../data/footerSocialLinksData"

export const Footer = () => {
  return (
    <div>
      <div class="cart-footer flex-center flex-column">
        <p class="">Made with <span class="primary-color footer-symbol"> &lt;/&gt; </span> by <a
          class="footer-linkedin-link" href="http://www.linkedin.com/in/vishruta-patil-30106b204">Vishruta Patil</a></p>
        <div class="social-links-container">
          <ul class="flex social-links-inner-container">
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
        <p class="copywrite-footer">© 2022 || magniZent</p>

      </div>
    </div>
  )
}
