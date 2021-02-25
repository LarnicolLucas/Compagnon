import navigation from './nav/navigation.js'

const navbar = {
    template : `
    <div>

        <ul id="slide-out" class="sidenav" ref="navBarMobile" style="width: 80vw; font-size: 35px;">

            <li><div class="user-view">
                <div class="background">
                <img class="responsive-img" src="images/background_svg.svg">
                </div>
                <a href="#user"><img style="width: 120px; height: 120px;" class="circle" src="images/avatar.jpg "></a>
                <a href="#name"><span style="font-size: 70px; padding: 50px;" class="white-text name">{{props.nom}}</span></a>
            </div></li>
            <li 
                v-for="keys in navigation"
                :key="keys.id"
                style="margin-top: 80px;"
            >
                <a style="font-size: 50px; margin: 50px;">
                    <i style="font-size: 50px;" class="material-icons">{{keys.icon}}</i>

                        {{keys.nom}}
                </a>
            </li>

            <img class="responsive-img circle" src="images/illustration_footer_nav.svg"/>
      
        </ul>
    </div>
    `,
    props: ["props"],
    data: function(){
        return {
            navigation: navigation
        }
    },
    methods: {
        initNavbar : function(){
            M.Sidenav.init(this.$refs.navBarMobile);
        }
    },
    mounted: function(){
        this.initNavbar()
    }
}

export default navbar