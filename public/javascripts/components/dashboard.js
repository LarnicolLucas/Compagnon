const dashboard = {
    template: `

        <article 
            class="col m12 l8 offset-l2 glass borderRadius fixedHeight80"
            style="margin-top: 10vh; display: flex;"
        >
            <div 
                class="leftNavBar margTopBot"
                :class='{"lightModeColor" : props.lightMode, "darkModeColor": props.darkMode}'
            >
            </div>

            <aside class="main_content glass margTopBot">
            </aside>
            
        </article>
    `,
    props: ['props']
}

export default dashboard
