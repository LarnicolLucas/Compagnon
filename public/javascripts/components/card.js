import card_img from './card/card_img.js'

const card = {
    template:`
    <section 
        class="row center-align glass borderRadiusCard" 
        :class="{'darkModeTextColor': props.darkMode, 'lightModeTextColor': props.lightMode}"
        style="position: relative;"
    >

        <card_img :props="props"></card_img>


        <div class="divider"></div>
        <div class="col s4 l6 offset-s4 offset-l3">
            <p> {{props.model.agent.etape_cursus_PST}} </p>
        </div>
        <section class="col s4 l8 offset-s4 offset-l2">
            <div class="row">
                <div class="col m4">
                    <div class="row">
                        <div class="col s10 offset-1">IMD</div>
                        <div class="col s10 offset-1 borderRadius" :style="{background: props.color_contrast}">{{props.model.agent.IMD}}</div>
                    </div>
                </div>
                <div class="col m4">
                    <div class="row">
                        <div class="col s10 offset-1">PST</div>
                        <div class="col s10 offset-1 borderRadius" :style="{background: props.color_contrast}">{{props.model.agent.PST}}</div>
                    </div>
                </div>
                <div class="col m4">
                    <div class="row">
                        <div class="col s10 offset-1">VPS</div>
                        <div class="col s10 offset-1 borderRadius" :style="{background: props.color_contrast}">{{props.model.agent.VPS}}</div>
                    </div>
                </div>
            </div>
        </section>

        <article class="glass" style="position: absolute; top: 1em; right: -2em; border-radius: 3px;">
            <h6>{{props.model.agent.habilitation}}</h6>
        </article>
    </section>
    `,
    props:["props"],

    data: function(){
        return {
            chemin_fond_avatar: [
                "/images/fond_PST/0.jpg",
                "/images/fond_PST/1.jpg",
                "/images/fond_PST/2.jpg",
                "/images/fond_PST/3.jpg",
              ]
        }
    },
    components: {
        card_img: card_img
    }
}

export default card