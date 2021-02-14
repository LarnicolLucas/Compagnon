import card_img from './card/card_img.js'
import description_card from './card/description_card.js'

const card = {
    template:`
    <section 
        class="row center-align glass borderRadiusCard" 
        :class="{'darkModeTextColor': props.darkMode, 'lightModeTextColor': props.lightMode}"
        style="position: relative;"
    >

        <card_img :props="props"></card_img>

        <description_card :props="props"></description_card>

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
        card_img: card_img,
        description_card:  description_card
    }
}

export default card