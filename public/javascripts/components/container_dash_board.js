
const container = {
    props: ['props'],
    template: `
        <main 
            class="row valign-wrapper transiAll"
            :class="{'fixedHeight100': props.isLarge, 'darkModeColor': props.isDarkMode}"
        
        >
            <article class="col s12 m8 offset-m2 borderRadius borderTopLeft boxShadow fixedHeight80">

            </article>
        </main>
    `
}

export default container