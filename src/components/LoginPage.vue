<template>
    <div>
        <input class="user" type="text" placeholder="Digite seu usuário">
        <input class="password" type="password" placeholder="Digite sua senha">
        <button class="acess" @click="AcessAcount">Entrar</button>
    </div>
</template>

<script>
export default{
    name: 'LoginPage',
    data(){

    },
    methods:{
        AcessAcount(a){
            a.preventDefault()
            console.log("ola");
        }
    }
}

</script>

<style>
.acess{
    border-radius: 0px;
}
</style>