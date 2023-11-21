<template>
    <div>
        <h2>Cadastrar Novo Cliente</h2>
        <form onclick="event.preventDefault()">
            <label for="first-name">Primeiro Nome</label>
            <input type="text" name="" id="first-name" v-model="customer.firstName">
            <label for="last-name">Sobrenome</label>
            <input type="text" name="" id="last-name" v-model="customer.lastName">
            <label for="city">Cidade:</label>
            <input type="text" name="" id="city" v-model="customer.city">
            <input type="submit" value="Salvar" @click="create">
            <input type="reset" value="Limpar">
        </form>
    </div>
</template>

<script setup>
import { baseUrl } from '@/apiconfig.js'
import { reactive } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';

const customer = reactive({
    firstName : '',
    lastName: '',
    city: ''
})

const router = useRouter()

const create = async () => {
    axios.post(baseUrl+'/customers', customer)
        .then(response => {
            alert('Dados cadastrados com sucesso!')
            router.push('/customers')
            
        })
        .catch(error => {
            alert('Erro ao cadastrar!')
        })
}

</script>

<style lang="scss" scoped>

</style>