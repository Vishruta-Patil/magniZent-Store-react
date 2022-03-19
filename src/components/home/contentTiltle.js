const ContentTitle = ({children, styles}) => {
    return (
        <div class={styles}>
          <p class="category-header top-product-header">{children}</p>
        </div>
    )
}

export default ContentTitle