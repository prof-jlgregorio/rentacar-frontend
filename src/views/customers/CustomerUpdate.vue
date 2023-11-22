<template>
    <div>
        <h2>Atualizar Cliente</h2>
        <form onclick="event.preventDefault()">
            <label for="first-name">Primeiro Nome</label>
            <input type="text" name="" id="first-name" v-model="customer.firstName">
            <label for="last-name">Sobrenome</label>
            <input type="text" name="" id="last-name" v-model="customer.lastName">
            <label for="city">Cidade:</label>
            <input type="text" name="" id="city" v-model="customer.city">
            <input type="submit" value="Salvar" @click="update">
            <input type="reset" value="Limpar">
        </form>
    </div>
</template>

<script setup>

import { baseUrl } from '@/apiconfig.js'
import { onMounted, reactive } from 'vue'
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';



const customer = reactive({
    id: 0,
    firstName : '',
    lastName: '',
    city: ''
})

const router = useRouter()
const route = useRoute()

const getCustomerById = async (id) => {
    await axios.get(`${baseUrl}/customers/${id}`)
        .then(response => {
            Object.assign(customer, response.data)
        })
        .catch( error => {
            alert("Erro! " +  error)
        })
}

const update = async () => {
    axios.put(baseUrl+'/customers', customer)
        .then(response => {
            alert('Dados atualizados com sucesso!')
            router.push('/customers')
        })
        .catch(error => {
            alert('Erro ao cadastrar!')
        })
}

onMounted(() => {
    getCustomerById(route.params.id)
})

</script>

<style lang="scss" scoped>

</style>