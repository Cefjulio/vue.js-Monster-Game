// Initial Template

function getRandomValue(min, max){

    const attackValue = Math.floor(Math.random() * (max -min)) + min;


};

const app = Vue.createApp({
    el: "#game",
    data (){
        return {
            
            playerHealth: 100,
            monsterHealth: 100   



        };
    },
    computed: {
        monsterBarStyles(){
            return { width: this.monsterHealth + '%'  }

        },
        playerBarStyles(){
            return { width: this.playerHealth + '%'  };
        },


    },

    methods: {
        attackMonster(){
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer;
        },
        attackPlayer(){
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;

        }



    }

});

app.mount('#game');