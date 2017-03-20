import Vue from 'vue'

import './utils'
import 'normalize.css'
import './styles/base.scss'

import { dealPrice, rmb } from './filters'

Vue.filter('rmb', rmb)
Vue.filter('dealPrice', dealPrice)
