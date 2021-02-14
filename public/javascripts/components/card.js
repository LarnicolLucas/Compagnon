const card = {
    template:`
    <section 
        class="row center-align glass borderRadiusCard" 
        :class="{'darkModeTextColor': props.darkMode, 'lightModeTextColor': props.lightMode}"
        style="position: relative; overflow: hidden;"
    >
        <!-- <figure class="col s12" style="position: absolute; top: -10%; left: 0; z-index: -1; ">
            <img :src="chemin_fond_avatar[props.model.agent.id_etape_cursus_PST]" class="responsive-img" alt="Image de fond"/>
        </figure> -->


        <figure class="col s4 l8 offset-s4 offset-l2">
            <img class="responsive-img circle" alt="avatar agent" :src="props.model.agent.chemin_avatar"/>
        </figure>
        <figcaption 
            class="col s4 l8 offset-s4 offset-l2 borderRadius" 
            :style="{background: props.color_contrast}"
            style="margin-bottom: 20px; margin-top: 20px;"
        >
            <h6><strong>{{props.model.agent.nom}} {{props.model.agent.prenom}}</strong></h6>
        </figcaption>
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

        <article style="position: absolute; top: 0; right: 0">{{props.model.agent.habilitation}}</article>
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
    }
}

export default card