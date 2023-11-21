<template>
  <div>
    <router-link to="/customers/create">Incluir Novo Cliente</router-link> 
    <h1>Lista de Clientes</h1>
    <table class="table table-striped" v-if="data._embedded">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Cidade</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="customer in data._embedded.customerDTOList"
          :key="customer.id"
        >
          <td>{{ customer.firstName }} {{ customer.lastName }}</td>
          <td>{{ customer.city }}</td>
          <td>
            <router-link
              :to="{ name: 'customers-update', params: { id: customer.id } }"
              >Editar</router-link
            >
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">
            <div class="links">
              <div>
                <button
                  class="btn btn-primary"
                  @click="getCustomersHateOas(data._links.first.href)"
                >
                  Primeira
                </button>
              </div>
              <div>
                <button
                  v-if="data._links.prev"
                  @click="getCustomersHateOas(data._links.first.href)"
                >
                  Anterior
                </button>
              </div>
              <div>
                <button @click="getCustomersHateOas(data._links.self.href)">
                  {{ data.page.number }}
                </button>
              </div>
              <div>
                <button
                  v-if="data._links.next"
                  @click="getCustomersHateOas(data._links.next.href)"
                >
                  Próxima
                </button>
              </div>
              <div>
                <button @click="getCustomersHateOas(data._links.last.href)">
                  Última
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
//importing the base url
import { baseUrl } from '@/apiconfig.js'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const data = ref([])

const getCustomers = async (page = 0, size = 10, sortBy = 'firstName') => {
  await axios
    .get(`${baseUrl}/customers?page=${page}&size=${size}&sort=${sortBy}`)
    .then(response => {
      data.value = response.data
      console.log('Data:', data)
    })
    .catch(error => {
      console.error('Erro: ', error)
    })
}

const getCustomersHateOas = async link => {
  await axios
    .get(link)
    .then(response => {
      data.value = response.data
    })
    .catch(error => {
      console.error('Erro: ', error)
    })
}

onMounted(() => {
  getCustomers(0, 10, 'firstName')
})
</script>

<style lang="css" scoped>
.links {
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
