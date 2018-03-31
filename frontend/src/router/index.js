import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import PageNotFound from '@/components/PageNotFound'

import Admission from '@/components/academics/Admission'
import Calendar from '@/components/academics/Calendar'
import Registrations from '@/components/academics/Registrations'
import Departments from '@/components/academics/Departments'
import Documents from '@/components/academics/Documents'
import Regulations from '@/components/academics/Regulations'
import Convocation from '@/components/academics/Convocation'
import Notices from '@/components/academics/Notices'
import Exams from '@/components/academics/Exams'

import Outreach from '@/components/activities/Outreach'
import Research from '@/components/activities/Research'
import Events from '@/components/activities/Events'
import Achievements from '@/components/activities/Achievements'
import Students from '@/components/activities/Students'

import Library from '@/components/facilities/Library'
import Mu from '@/components/facilities/Mu'
import Ceam from '@/components/facilities/Ceam'
import Cif from '@/components/facilities/Cif'
import Hostels from '@/components/facilities/Hostels'
import Po from '@/components/facilities/Po'
import Banks from '@/components/facilities/Banks'
import Guest from '@/components/facilities/Guest'
import Sac from '@/components/facilities/Sac'
import Hvl from '@/components/facilities/Hvl'
import Canteen from '@/components/facilities/Canteen'
import Cc from '@/components/facilities/Cc'

import Reports from '@/components/information/Reports'
import Eprashasan from '@/components/information/Eprashasan'
import Accounts from '@/components/information/Accounts'
import Teqip from '@/components/information/Teqip'
import Nba from '@/components/information/Nba'
import Nirf from '@/components/information/Nirf'
import Rti from '@/components/information/Rti'
import Grievances from '@/components/information/Grievances'
import History from '@/components/information/History'
import Location from '@/components/information/Location'
import Moreinfo from '@/components/information/Moreinfo'
import Careers from '@/components/information/Careers'
import Tenders from '@/components/information/Tenders'



Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Home
    },

    // Academics
    {
      path: '/academics/admission',
      name: 'Admission',
      component: Admission
    },
    {
      path: '/academics/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/academics/registrations',
      name: 'Registrations',
      component: Registrations
    },
    {
      path: '/academics/departments',
      name: 'Departments',
      component: Departments
    },
    {
      path: '/academics/documents',
      name: 'Documents',
      component: Documents
    },
    {
      path: '/academics/regulations',
      name: 'Regulations',
      component: Regulations
    },
    {
      path: '/academics/convocation',
      name: 'Convocation',
      component: Convocation
    },
    {
      path: '/academics/notices',
      name: 'Notices',
      component: Notices
    },
    {
      path: '/academics/exams',
      name: 'Exams',
      component: Exams
    },

    // Activities
    {
      path: '/activities/outreach',
      name: 'Outreach',
      component: Outreach
    },
    {
      path: '/activities/research',
      name: 'Research',
      component: Research
    },
    {
      path: '/activities/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/activities/achievements',
      name: 'Achievements',
      component: Achievements
    },
    {
      path: '/activities/students',
      name: 'Students',
      component: Students
    },

    // Facilities
    {
      path: '/facilities/library',
      name: 'Library',
      component: Library
    },
    {
      path: '/facilities/hvl',
      name: 'Hvl',
      component: Hvl
    },
    {
      path: '/facilities/canteen',
      name: 'Canteen',
      component: Canteen
    },
    {
      path: '/facilities/hostels',
      name: 'Hostels',
      component: Hostels
    },
    {
      path: '/facilities/banks',
      name: 'Banks',
      component: Banks
    },
    {
      path: '/facilities/cc',
      name: 'Cc',
      component: Cc
    },
    {
      path: '/facilities/mu',
      name: 'Mu',
      component: Mu
    },
    {
      path: '/facilities/ceam',
      name: 'Ceam',
      component: Ceam
    },
    {
      path: '/facilities/cif',
      name: 'Cif',
      component: Cif
    },
    {
      path: '/facilities/guest',
      name: 'Guest',
      component: Guest
    },
    {
      path: '/facilities/sac',
      name: 'Sac',
      component: Sac
    },
    {
      path: '/facilities/po',
      name: 'Po',
      component: Po
    },

    // Information
    {
      path: '/information/reports',
      name: 'Reports',
      component: Reports
    },
    {
      path: '/information/eprashasan',
      name: 'Eprashasan',
      component: Eprashasan
    },
    {
      path: '/information/accounts',
      name: 'Accounts',
      component: Accounts
    },
    {
      path: '/information/teqip',
      name: 'Teqip',
      component: Teqip
    },
    {
      path: '/information/nba',
      name: 'Nba',
      component: Nba
    },
    {
      path: '/information/nirf',
      name: 'Nirf',
      component: Nirf
    },
    {
      path: '/information/rti',
      name: 'Rti',
      component: Rti
    },
    {
      path: '/information/grievances',
      name: 'Grievances',
      component: Grievances
    },
    {
      path: '/information/history',
      name: 'History',
      component: History
    },
    {
      path: '/information/location',
      name: 'Location',
      component: Location
    },
    {
      path: '/information/moreinfo',
      name: 'Moreinfo',
      component: Moreinfo
    },
    {
      path: '/information/careers',
      name: 'Careers',
      component: Careers
    },
    {
      path: '/information/tenders',
      name: 'Tenders',
      component: Tenders
    },

    // This is meant to be at the last
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
