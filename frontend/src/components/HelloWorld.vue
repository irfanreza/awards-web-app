<template>
  <div>
   <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 v-for="award in awards" :key="award.id">
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: .5
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-card
            class="mx-auto"
            max-width="400"
            height="200px"
          >
            <v-img
              :src="`${award.image}`"
              aspect-ratio="2.75"
              class="white--text align-end"
            >
                <v-chip class="ma-2" :color="`${award.type === 'Vouchers' ? 'primary' : 'green'}`" text-color="white" :style="{ padding: '14px', float: 'right' }">
                  {{award.type}}
                </v-chip>
                <v-card-title :style="{}" >{{award.exchange_point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}} Poin</v-card-title>
            </v-img>
            <div :style="{ padding: '15px', fontWeight: 'bold' }">
              {{award.name}}
            </div>
          </v-card>
        </v-lazy>
        </v-flex>

      </v-layout>
    </v-container>
    <div v-if="awards.length" v-observe-visibility="handleScrolledToBottom"></div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Award',

    data: () => ({
      awards: [],
      page: 1,
      limit: 5,
      lastPage: 1,
      isActive: false,
    }),

    methods: {
      async fetch () {
        const config = { headers: { 'Content-Type': 'application/json' } }
        let awards = await axios.post(`http://localhost:3030/api/v1/awards?page=${this.page}&limit=${this.limit}`, {}, config)

        this.awards.push(...awards.data.data)
        this.lastPage = awards.data.meta.last_page
      },

      handleScrolledToBottom (isVisible) {
        if (!isVisible) { return }
        if (this.page >= this.lastPage) { return }

        this.page++

        this.fetch()
      }
    },

    mounted () {
      this.fetch()
    }
  }
</script>
