<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Awards Menu
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          @click="menuClickHandler($event)"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-toolbar-title>Awards</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-filter-variant</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-toolbar
            dark
            color="primary"
          >
            <v-toolbar-title>Filter</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              icon
              dark
              @click="dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <div  v-if="filterHistory.length > 0" class="ml-4 mt-4 mb-4">
            <div v-for="filter in filterHistory">
              <v-chip
              class="ma-2"
              close
              color="primary"
              outlined
            >
              {{filter.text}}
            </v-chip>
            </div>
            <div v-if="filterHistory.length > 1">
              <v-chip
              class="ma-2"
              color="primary"
              outlined
            >
              Clear All Filter
            </v-chip>
            </div>
          </div>
          <v-divider></v-divider>
          <div class="ml-4 mt-4 mb-4">
            <p class="mb-0 font-weight-medium">
              Poin Needed
            </p>
            <v-form>
            <v-container>
              <v-row>
                <v-col
                  cols="6"
                  md="6"
                >
                  <v-text-field
                    v-model="min"
                    label="Min Poin"
                    @change="minChangeHandle($event)"
                    value="min"
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="6"
                  md="6"
                >
                  <v-text-field
                    v-model="max"
                    label="Max Poin"
                    @change="maxChangeHandle($event)"
                    value="max"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          </div>
          <v-divider></v-divider>
          <div class="ml-4 mt-4 mb-4">
            <p class="font-weight-medium">
              Awards Type
            </p>
            <v-checkbox
              v-model="allType"
              label="All Type"
              hide-details
              @change="allTypeClickHandle($event)"
            ></v-checkbox>
            <v-checkbox
              v-model="vouchers"
              label="Vouchers"
              value="Vouchers"
              hide-details
              @change="vouchersClickHandle($event)"
            ></v-checkbox>
            <v-checkbox
              v-model="products"
              label="Products"
              value="Products"
              hide-details
              @change="productsClickHandle($event)"
            ></v-checkbox>
            <v-checkbox
              v-model="others"
              label="Others"
              value="Others"
              hide-details
              @change="othersClickHandle($event)"
            ></v-checkbox>
          </div>
          <v-btn
            block
            text
            @click="saveClickHandle"
            :style="{ color: 'white', backgroundColor: '#1867c0' }"
          >
            Save
          </v-btn>
          <v-spacer></v-spacer>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard', to: '/' },
        { title: 'Cards', icon: 'mdi-image' },
        { title: 'Profile', icon: 'mdi-help-box' },
        { title: 'Logout', icon: 'mdi-help-box' },
      ],
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      allType: false,
      vouchers: null,
      products: null,
      others: null,
      types: [],
      pointRange: { min: null, max: null },
      min: null,
      max: null,
      lastRouter: 'home',
      filterHistory: []
    }),

    methods: {
      allTypeClickHandle(e) {
        if (e) {
          const fullTypeFilter = ['Vouchers', 'Products', 'Others']
          const currentUncheckFilter = fullTypeFilter.filter(value => !this.types.includes(value))
          this.types.push(...currentUncheckFilter)
          this.vouchers = 'Vouchers'
          this.products = 'Products'
          this.others = 'Others'
        } else {
          this.vouchers = null
          this.products = null
          this.others = null
          this.types= []
        }
        // console.log(this.types)
      },
      vouchersClickHandle(e) {
        if (e) this.types.push(e)
        else this.removeFilterHandler('Vouchers')
        this.isAllTypeCheck()
      },
      productsClickHandle(e) {
        if (e) this.types.push(e)
        else this.removeFilterHandler('Products')
        this.isAllTypeCheck()
      },
      othersClickHandle(e) {
        if (e) this.types.push(e)
        else this.removeFilterHandler('Others')
        this.isAllTypeCheck()
      },
      removeFilterHandler(item) {
        const index = this.types.indexOf(item)
        this.types.splice(index, 1)
        // console.log(this.types)
      },
      isAllTypeCheck() {
        const fullTypeFilter = ['Vouchers', 'Products', 'Others'].sort().join(',')
        const currentTypeFilter = this.types.sort().join(',')
        if (fullTypeFilter === currentTypeFilter) this.allType = true
        else this.allType = false
        // console.log(this.types)
      },
      saveClickHandle() {
        this.dialog = false
        this.lastRouter = this.lastRouter === 'home' ? 'filter' : 'home'
        const appliedFilter = {
          text: '',
          filter: {
            types: this.types,
            pointRange: this.pointRange
          }
        }
        if(this.types.length === 1 ) {
          appliedFilter.text += `Type: ${this.types[0]} `
        } else if (this.types.length > 1) {
          appliedFilter.text += `Type: ${this.types.join(',')} `
        }

        if(typeof this.pointRange.min === 'number' && typeof this.pointRange.max === 'number') {
          appliedFilter.text += `Poin: ${this.pointRange.min} - ${this.pointRange.max}`
        }
        
        let filterHistory = JSON.parse(localStorage.getItem('filter'))
        if (!filterHistory) filterHistory = [];
        console.log(filterHistory)
        filterHistory.push(appliedFilter)
        localStorage.setItem('filter', JSON.stringify(filterHistory))
        this.filterHistory = filterHistory.reverse().slice(0,3)
        this.$router.push({ name: this.lastRouter, params: { types: this.types, pointRange: this.pointRange } })
      },
      minChangeHandle(e) {
        const number = e.replace(/[^0-9\.]+/g, '')
        this.min = number
        this.pointRange.min = +this.min
        // console.log(this.pointRange)
      },
      maxChangeHandle(e) {
        const number = e.replace(/[^0-9\.]+/g, '')
        if(number < this.min) this.max = this.min
        else this.max = number
        this.pointRange.max = +this.max
        // console.log(this.pointRange)
      },
      menuClickHandler(e) {
        if(e.view.window.location.pathname === '/') {
          this.vouchers = null
          this.products = null
          this.others = null
          this.types= []
          this.pointRange = {
            min: null,
            max: null
          }
          this.min = null,
          this.max = null
          this.lastRouter = 'home'
        }
      }
    }
  }
</script>