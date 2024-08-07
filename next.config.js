/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   'academicjobs.s3.amazonaws.com',
    //   'res.cloudinary.com',
    //   'iloveacademicjobs.com',
    //   'uniiq.com',
    //   'www.qut.edu.au',
    //   'www.academicjobs.com',
    //   'images.all-free-download.com',
    //   'dentalstudents.com.au',
    // ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.daisyui.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'academicjobs.s3.amazonaws.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'iloveacademicjobs.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'uniiq.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.qut.edu.au',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.academicjobs.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.all-free-download.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'dentalstudents.com.au',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      // {
      //   source: '/find-jobs',
      //   destination: '/jobs',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/:path',
      //   destination: '/jobs',
      //   permanent: true,
      // },
      // {
      //   source: '/hr',
      //   destination: '/hr-jobs',
      //   permanent: true,
      // },
      // {
      //   source: '/admin',
      //   destination: '/staff-jobs',
      //   permanent: true,
      // },
      // {
      //   source: '/student',
      //   destination: '/student-jobs',
      //   permanent: true,
      // },

      // {
      //   source: '/global/recruitment',
      //   destination: '/recruitment',
      //   permanent: true,
      // },
      // {
      //   source: '/global/jobs',
      //   destination: '/jobs',
      //   permanent: true,
      // },
      // {
      //   source: '/global',
      //   destination: '/',
      //   permanent: true,
      // },
      // {
      //   source: '/academic-hub',
      //   destination: '/career-help',
      //   permanent: true,
      // },
      // {
      //   source: '/talent-pool',
      //   destination: '/academic-talent-pool',
      //   permanent: true,
      // },
      // {
      //   source: '/jobs/general-manager-jobs',
      //   destination: '/hr-jobs/generalist-hr',
      //   permanent: true,
      // },
      // {
      //   source: '/jobs/student-casual',
      //   destination: '/student/casual',
      //   permanent: true,
      // },
      // {
      //   source: '/jobs/healthcare-managing-director-jobs',
      //   destination: '/faculty/healthcare-administration',
      //   permanent: true,
      // },
      // {
      //   source: '/jobs/healthcare-managing-director-jobs',
      //   destination: '/faculty/healthcare-administration',
      //   permanent: true,
      // },
      // {
      //   source: '/jobs/project-delivery-director-jobs',
      //   destination: '/executive/directors',
      //   permanent: true,
      // },
      // {
      //   source: '/jobs/head-treasury-jobs',
      //   destination: '/executive/heads-department-chairs-department-jobs',
      //   permanent: true,
      // },
      // {
      //   source: '/jobs/head-sustainability-jobs',
      //   destination: '/faculty/other-science-specialities',
      //   permanent: true,
      // },
      // {
      //   source: '/jobs/construction-manager-jobs',
      //   destination: '/faculty/construction-building-trades/',
      //   permanent: true,
      // },
      // {
      //   source: '/jobs/student-full-time',
      //   destination: '/student/full-time',
      //   permanent: true,
      // },
      // {
      //   source: '/jobs/chief-technology-officer-jobs',
      //   destination: '/faculty/information-systems-technology/',
      //   permanent: true,
      // },
      // {
      //   source: '/jobs/ceo-md-jobs',
      //   destination: '/faculty/business-management/',
      //   permanent: true,
      // },
      // {
      //   source: '/jobs/student-part-time',
      //   destination: '/student/part-time',
      //   permanent: true,
      // },
      // {
      //   source: '/jobs/equity-partner-jobs',
      //   destination: '/faculty/other-business-specialities',
      //   permanent: true,
      // },
      // {
      //   source: '/jobs/development-director-jobs',
      //   destination: '/executive/directors',
      //   permanent: true,
      // },
      // {
      //   source: '/macquarie-university-jobs',
      //   destination: '/employers/macquarie-university/3881',
      //   permanent: true,
      // },
      // {
      //   source: '/position',
      //   destination: '/faculty',
      //   permanent: true,
      // },
      // {
      //   source: '/monash-university-jobs',
      //   destination: '/employers/monash-university/3182/',
      //   permanent: true,
      // },
      // {
      //   source: '/the-university-of-western-australia-jobs',
      //   destination: '/employers/university-of-western-australia/3173',
      //   permanent: true,
      // },
      // {
      //   source: '/the-university-of-queensland-jobs',
      //   destination: '/employers/university-of-queensland/3172',
      //   permanent: true,
      // },
      // {
      //   source: '/the-university-of-sydney-jobs',
      //   destination: '/employers/the-university-of-sydney/3171',
      //   permanent: true,
      // },
      // {
      //   source: '/university-of-new-south-wales-jobs',
      //   destination: '/employers/university-of-new-south-wales-unsw-/3738',
      //   permanent: true,
      // },
      // {
      //   source: '/the-university-of-adelaide-jobs',
      //   destination: '/employers/the-university-of-adelaide/3737',
      //   permanent: true,
      // },
      // {
      //   source: '/university-of-technology-sydney-jobs',
      //   destination: '/employers/university-of-technology-sydney/3864',
      //   permanent: true,
      // },
      // {
      //   source: '/the-university-of-melbourne-jobs',
      //   destination: '/employers/university-of-melbourne/3170/',
      //   permanent: true,
      // },
      // {
      //   source: '/usa/admin',
      //   destination: '/usa/staff',
      //   permanent: true,
      // },
      // {
      //   source: '/post-job',
      //   destination: '/recruitment',
      //   permanent: true,
      // },
      // {
      //   source: '/australian-national-university-jobs',
      //   destination: '/employers/australian-national-university/3739',
      //   permanent: true,
      // },
      // {
      //   source: '/categories/culinary-arts-university-jobs',
      //   destination: '/faculty',
      //   permanent: true,
      // },
      // {
      //   source: '/categories/educational-psychology-university-jobs',
      //   destination: '/faculty',
      //   permanent: true,
      // },
      // {
      //   source: '/categories/electronics-university-jobs',
      //   destination: '/faculty',
      //   permanent: true,
      // },
      // {
      //   source: '/categories/medicine-university-jobs',
      //   destination: '/faculty',
      //   permanent: true,
      // },
      // {
      //   source: '/categories/sociology-university-jobs',
      //   destination: '/faculty',
      //   permanent: true,
      // },
      // {
      //   source: '/categories/teacher-education-middle-school-university-jobs',
      //   destination: '/faculty',
      //   permanent: true,
      // },
      // {
      //   source: '/company/3105/university-of-california-berkeley',
      //   destination: '/jobs-by-top-universities',
      //   permanent: true,
      // },
      // {
      //   source: '/company/3781/tarrant-county-college-district',
      //   destination: '/jobs-by-top-universities',
      //   permanent: true,
      // },
      // {
      //   source: '/employers/company/deakin-university/3856',
      //   destination: '/jobs-by-top-universities',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/bond-university-administration',
      //   destination: '/employers/bond-university/3785',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/bond-university-executive',
      //   destination: '/employers/bond-university/3785',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/bond-university-human-resources',
      //   destination: '/employers/bond-university/3785',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/bond-university-lecturing',
      //   destination: '/employers/bond-university/3785',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/bond-university-professor',
      //   destination: '/employers/bond-university/3785',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/bond-university-research',
      //   destination: '/employers/bond-university/3785',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/harvard-university-administration',
      //   destination: '/employers/harvard-university/3100',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/harvard-university-executive',
      //   destination: '/employers/harvard-university/3100',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/harvard-university-human-resources',
      //   destination: '/employers/harvard-university/3100',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/harvard-university-lecturing',
      //   destination: '/employers/harvard-university/3100',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/harvard-university-professor',
      //   destination: '/employers/harvard-university/3100',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/harvard-university-research',
      //   destination: '/employers/harvard-university/3100',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/northern-territory',
      //   destination: '/australia/jobs',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/qut-lecturing',
      //   destination: '',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/qut-professor',
      //   destination: '',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/qut-research',
      //   destination: '',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/qut-university-administration',
      //   destination: '',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/qut-university-executive',
      //   destination: '',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/qut-university-human-resources',
      //   destination: '',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/ucsd-lecturing',
      //   destination: '/employers/the-university-of-sydney/3171',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/ucsd-professor',
      //   destination: '/employers/the-university-of-sydney/3171',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/ucsd-research',
      //   destination: '/employers/the-university-of-sydney/3171',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/ucsd-university-administration',
      //   destination: '/employers/the-university-of-sydney/3171',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/ucsd-university-executive',
      //   destination: '/employers/the-university-of-sydney/3171',
      //   permanent: true,
      // },
      // {
      //   source: '/find-jobs/ucsd-university-human-resources',
      //   destination: '/employers/the-university-of-sydney/3171',
      //   permanent: true,
      // },
      // {
      //   source: '/h/employers/university-of-tasmania/3867',
      //   destination: '/employers/university-of-tasmania/3867',
      //   permanent: true,
      // },
      // {
      //   source: '/employers/12787/university-of-kwazulu-natal',
      //   destination: '/employers/university-of-kwazulu-natal/12787',
      //   permanent: true,
      // },
      // {
      //   source: '/position/assistant-professor',
      //   destination: '/faculty',
      //   permanent: true,
      // },
      // {
      //   source: '/position/associate-professor',
      //   destination: '/faculty',
      //   permanent: true,
      // },
      // {
      //   source: '/position/lab-technician',
      //   destination: '/faculty',
      //   permanent: true,
      // },
      // {
      //   source: '/position/other-positions',
      //   destination: '/faculty',
      //   permanent: true,
      // },
      // {
      //   source: '/position/postdoc',
      //   destination: '/faculty',
      //   permanent: true,
      // },
      // {
      //   source: '/categories/administration',
      //   destination: '/admin',
      //   permanent: true,
      // },
      // {
      //   source:
      //     '/blog/how-to-land-your-dream-college-job-a-step-by-step-guide/',
      //   destination:
      //     '/career-help/how-to-land-your-dream-college-job-a-step-by-step-guide',
      //   permanent: true,
      // },
      // {
      //   source: '/uk/hr',
      //   destination: '/uk/hr-jobs',
      //   permanent: true,
      // },
      // {
      //   source: '/uk/hr',
      //   destination: '/uk/hr-jobs',
      //   permanent: true,
      // },
      // {
      //   source: '/Canada',
      //   destination: '/canada',
      //   permanent: true,
      // },
      // {
      //   source: '/Australia',
      //   destination: '/australia',
      //   permanent: true,
      // },
      {
        source: '/UK',
        destination: 'https://www.academicjobs.com/uk',
        permanent: true,
      },
      // {
      //   source: '/Europe',
      //   destination: '/europe',
      //   permanent: true,
      // },
      // {
      //   source: '/USA',
      //   destination: '/usa',
      //   permanent: true,
      // },
      // {
      //   source: '/Asia',
      //   destination: '/asia',
      //   permanent: true,
      // },
      // {
      //   source: '/employers/academic-jobs-australia/3328',
      //   destination: '/australia',
      //   permanent: true,
      // },

      {
        source: '/jobs-by-top-universities',
        destination:
          'https://www.academicjobs.com/global/jobs-by-top-universities',
        permanent: true,
      },
      // {
      // source: '/career-help',
      // destination: 'https://www.academicjobs.com/career-help',
      // permanent: true,
      // },

      {
        source: '/australia',
        destination: 'https://www.academicjobs.com/australia',
        permanent: true,
      },
      {
        source: '/asia',
        destination: 'https://www.academicjobs.com/asia',
        permanent: true,
      },
      {
        source: '/africa',
        destination: 'https://www.academicjobs.com/africa',
        permanent: true,
      },
      {
        source: '/canada',
        destination: 'https://www.academicjobs.com/canada',
        permanent: true,
      },
      {
        source: '/europe',
        destination: 'https://www.academicjobs.com/europe',
        permanent: true,
      },
      {
        source: '/india',
        destination: 'https://www.academicjobs.com/india',
        permanent: true,
      },
      {
        source: '/south-america',
        destination: 'https://www.academicjobs.com/south-america',
        permanent: true,
      },
      {
        source: '/middle-east',
        destination: 'https://www.academicjobs.com/middle-east',
        permanent: true,
      },
      {
        source: '/new-zealand',
        destination: 'https://www.academicjobs.com/new-zealand',
        permanent: true,
      },
      {
        source: '/uk',
        destination: 'https://www.academicjobs.com/uk',
        permanent: true,
      },
      {
        source: '/usa',
        destination: 'https://www.academicjobs.com/usa',
        permanent: true,
      },
      {
        source: '/student-jobs',
        destination: 'https://www.academicjobs.com/student-jobs',
        permanent: true,
      },
      {
        source: '/lecturer',
        destination: 'https://www.academicjobs.com/lecturer',
        permanent: true,
      },
      {
        source: '/research',
        destination: 'https://www.academicjobs.com/research',
        permanent: true,
      },
      {
        source: '/executive',
        destination: 'https://www.academicjobs.com/executive',
        permanent: true,
      },
      {
        source: '/hr-jobs',
        destination: 'https://www.academicjobs.com/hr-jobs',
        permanent: true,
      },
      {
        source: '/professor',
        destination: 'https://www.academicjobs.com/professor',
        permanent: true,
      },
      {
        source: '/staff-jobs',
        destination: 'https://www.academicjobs.com/staff-jobs',
        permanent: true,
      },
      {
        source: '/faculty',
        destination: 'https://www.academicjobs.com/faculty',
        permanent: true,
      },
      // {
      // source: '/online',
      // destination: 'https://www.academicjobs.com/online',
      // permanent: true,
      // },
      {
        source: '/australia/student',
        destination: 'https://www.academicjobs.com/australia/student',
        permanent: true,
      },
      {
        source: '/australia/lecturer',
        destination: 'https://www.academicjobs.com/australia/lecturer',
        permanent: true,
      },
      {
        source: '/australia/research',
        destination: 'https://www.academicjobs.com/australia/research',
        permanent: true,
      },
      {
        source: '/australia/executive',
        destination: 'https://www.academicjobs.com/australia/executive',
        permanent: true,
      },
      {
        source: '/australia/hr-jobs',
        destination: 'https://www.academicjobs.com/australia/hr-jobs',
        permanent: true,
      },
      {
        source: '/australia/professor',
        destination: 'https://www.academicjobs.com/australia/professor',
        permanent: true,
      },
      {
        source: '/australia/admin',
        destination: 'https://www.academicjobs.com/australia/admin',
        permanent: true,
      },
      {
        source: '/usa/student',
        destination: 'https://www.academicjobs.com/usa/student',
        permanent: true,
      },
      {
        source: '/usa/lecturer',
        destination: 'https://www.academicjobs.com/usa/lecturer',
        permanent: true,
      },
      {
        source: '/usa/research',
        destination: 'https://www.academicjobs.com/usa/research',
        permanent: true,
      },
      {
        source: '/usa/executive',
        destination: 'https://www.academicjobs.com/usa/executive',
        permanent: true,
      },
      {
        source: '/usa/hr-jobs',
        destination: 'https://www.academicjobs.com/usa/hr-jobs',
        permanent: true,
      },
      {
        source: '/usa/professor',
        destination: 'https://www.academicjobs.com/usa/professor',
        permanent: true,
      },
      {
        source: '/usa/staff',
        destination: 'https://www.academicjobs.com/usa/staff',
        permanent: true,
      },
      {
        source: '/jobs/remote',
        destination: 'https://www.academicjobs.com/jobs/remote',
        permanent: true,
      },
      {
        source: '/jobs/full-time',
        destination: 'https://www.academicjobs.com/jobs/full-time',
        permanent: true,
      },
      {
        source: '/jobs/part-time',
        destination: 'https://www.academicjobs.com/jobs/part-time',
        permanent: true,
      },
      {
        source: '/jobs/casual',
        destination: 'https://www.academicjobs.com/jobs/casual',
        permanent: true,
      },
      {
        source: '/the-university-rankings',
        destination: 'https://www.academicjobs.com/the-university-rankings',
        permanent: true,
      },
      {
        source: '/student-jobs/part-time',
        destination: 'https://www.academicjobs.com/student-jobs/part-time',
        permanent: true,
      },
      {
        source: '/student-jobs/casual',
        destination: 'https://www.academicjobs.com/student-jobs/casual',
        permanent: true,
      },
      {
        source: '/student-jobs/full-time',
        destination: 'https://www.academicjobs.com/student-jobs/full-time',
        permanent: true,
      },
      {
        source: '/lecturer/agriculture',
        destination: 'https://www.academicjobs.com/lecturer/agriculture',
        permanent: true,
      },
      {
        source: '/lecturer/business',
        destination: 'https://www.academicjobs.com/lecturer/business',
        permanent: true,
      },
      {
        source: '/lecturer/communications',
        destination: 'https://www.academicjobs.com/lecturer/communications',
        permanent: true,
      },
      {
        source: '/lecturer/education',
        destination: 'https://www.academicjobs.com/lecturer/education',
        permanent: true,
      },
      {
        source: '/lecturer/engineering',
        destination: 'https://www.academicjobs.com/lecturer/engineering',
        permanent: true,
      },
      {
        source: '/lecturer/fine-applied-arts',
        destination: 'https://www.academicjobs.com/lecturer/fine-applied-arts',
        permanent: true,
      },
      {
        source: '/lecturer/health-sciences',
        destination: 'https://www.academicjobs.com/lecturer/health-sciences',
        permanent: true,
      },
      {
        source: '/lecturer/law-legal-studies',
        destination: 'https://www.academicjobs.com/lecturer/law-legal-studies',
        permanent: true,
      },
      {
        source: '/lecturer/liberal-arts',
        destination: 'https://www.academicjobs.com/lecturer/liberal-arts',
        permanent: true,
      },
      {
        source: '/lecturer/medicine',
        destination: 'https://www.academicjobs.com/lecturer/medicine',
        permanent: true,
      },
      {
        source: '/lecturer/science',
        destination: 'https://www.academicjobs.com/lecturer/science',
        permanent: true,
      },
      {
        source: '/lecturer/technical-career',
        destination: 'https://www.academicjobs.com/lecturer/technical-career',
        permanent: true,
      },
      {
        source: '/research/agriculture',
        destination: 'https://www.academicjobs.com/research/agriculture',
        permanent: true,
      },
      {
        source: '/research/business',
        destination: 'https://www.academicjobs.com/research/business',
        permanent: true,
      },
      {
        source: '/research/communications',
        destination: 'https://www.academicjobs.com/research/communications',
        permanent: true,
      },
      {
        source: '/research/education',
        destination: 'https://www.academicjobs.com/research/education',
        permanent: true,
      },
      {
        source: '/research/engineering',
        destination: 'https://www.academicjobs.com/research/engineering',
        permanent: true,
      },
      {
        source: '/research/fine-applied-arts',
        destination: 'https://www.academicjobs.com/research/fine-applied-arts',
        permanent: true,
      },
      {
        source: '/research/health-sciences',
        destination: 'https://www.academicjobs.com/research/health-sciences',
        permanent: true,
      },
      {
        source: '/research/law-legal-studies',
        destination: 'https://www.academicjobs.com/research/law-legal-studies',
        permanent: true,
      },
      {
        source: '/research/liberal-arts',
        destination: 'https://www.academicjobs.com/research/liberal-arts',
        permanent: true,
      },
      {
        source: '/research/medicine',
        destination: 'https://www.academicjobs.com/research/medicine',
        permanent: true,
      },
      {
        source: '/research/science',
        destination: 'https://www.academicjobs.com/research/science',
        permanent: true,
      },
      {
        source: '/research/technical-career',
        destination: 'https://www.academicjobs.com/research/technical-career',
        permanent: true,
      },
      {
        source: '/professor/agriculture',
        destination: 'https://www.academicjobs.com/professor/agriculture',
        permanent: true,
      },
      {
        source: '/professor/business',
        destination: 'https://www.academicjobs.com/professor/business',
        permanent: true,
      },
      {
        source: '/professor/communications',
        destination: 'https://www.academicjobs.com/professor/communications',
        permanent: true,
      },
      {
        source: '/professor/education',
        destination: 'https://www.academicjobs.com/professor/education',
        permanent: true,
      },
      {
        source: '/professor/engineering',
        destination: 'https://www.academicjobs.com/professor/engineering',
        permanent: true,
      },
      {
        source: '/professor/fine-applied-arts',
        destination: 'https://www.academicjobs.com/professor/fine-applied-arts',
        permanent: true,
      },
      {
        source: '/professor/health-sciences',
        destination: 'https://www.academicjobs.com/professor/health-sciences',
        permanent: true,
      },
      {
        source: '/professor/law-legal-studies',
        destination: 'https://www.academicjobs.com/professor/law-legal-studies',
        permanent: true,
      },
      {
        source: '/professor/liberal-arts',
        destination: 'https://www.academicjobs.com/professor/liberal-arts',
        permanent: true,
      },
      {
        source: '/professor/medicine',
        destination: 'https://www.academicjobs.com/professor/medicine',
        permanent: true,
      },
      {
        source: '/professor/science',
        destination: 'https://www.academicjobs.com/professor/science',
        permanent: true,
      },
      {
        source: '/professor/technical-career',
        destination: 'https://www.academicjobs.com/professor/technical-career',
        permanent: true,
      },
      {
        source: '/faq',
        destination: 'https://www.academicjobs.com/faq',
        permanent: true,
      },
      // {
      // source: '/contact-us',
      // destination: 'https://www.academicjobs.com/contact-us',
      // permanent: true,
      // },
      // {
      // source: '/about',
      // destination: 'https://www.academicjobs.com/about',
      // permanent: true,
      // },
      // {
      // source: '/sitemap',
      // destination: 'https://www.academicjobs.com/sitemap',
      // permanent: true,
      // },
      // {
      // source: '/about/terms-of-use',
      // destination: 'https://www.academicjobs.com/about/terms-of-use',
      // permanent: true,
      // },
      // {
      // source: '/about/diversity-statement',
      // destination: 'https://www.academicjobs.com/about/diversity-statement',
      // permanent: true,
      // },
      {
        source: '/employers/university-of-melbourne/3170',
        destination:
          'https://www.academicjobs.com/employers/university-of-melbourne/3170',
        permanent: true,
      },
      {
        source: '/employers/monash-university/3182',
        destination:
          'https://www.academicjobs.com/employers/monash-university/3182',
        permanent: true,
      },
      {
        source: '/employers/victoria-university/3871',
        destination:
          'https://www.academicjobs.com/employers/victoria-university/3871',
        permanent: true,
      },
      {
        source: '/employers/university-of-divinity/3872',
        destination:
          'https://www.academicjobs.com/employers/university-of-divinity/3872',
        permanent: true,
      },
      {
        source: '/employers/swimburne-university-of-technology/3870',
        destination:
          'https://www.academicjobs.com/employers/swimburne-university-of-technology/3870',
        permanent: true,
      },
      {
        source: '/employers/rmit-university/3869',
        destination:
          'https://www.academicjobs.com/employers/rmit-university/3869',
        permanent: true,
      },
      {
        source: '/employers/la-trobe-university/3868',
        destination:
          'https://www.academicjobs.com/employers/la-trobe-university/3868',
        permanent: true,
      },
      {
        source: '/employers/deakin-university/3856',
        destination:
          'https://www.academicjobs.com/employers/deakin-university/3856',
        permanent: true,
      },
      {
        source: '/employers/federation-university/3787',
        destination:
          'https://www.academicjobs.com/employers/federation-university/3787',
        permanent: true,
      },
      {
        source: '/employers/university-of-tasmania/3867',
        destination:
          'https://www.academicjobs.com/employers/university-of-tasmania/3867',
        permanent: true,
      },
      {
        source: '/employers/bond-university/3785',
        destination:
          'https://www.academicjobs.com/employers/bond-university/3785',
        permanent: true,
      },
      {
        source: '/employers/university-of-queensland/3172',
        destination:
          'https://www.academicjobs.com/employers/university-of-queensland/3172',
        permanent: true,
      },
      {
        source: '/employers/cquniversity/3854',
        destination: 'https://www.academicjobs.com/employers/cquniversity/3854',
        permanent: true,
      },
      {
        source: '/employers/griffith-university/3860',
        destination:
          'https://www.academicjobs.com/employers/griffith-university/3860',
        permanent: true,
      },
      {
        source: '/employers/james-cook-university/3857',
        destination:
          'https://www.academicjobs.com/employers/james-cook-university/3857',
        permanent: true,
      },
      {
        source: '/employers/university-of-southern-queensland/3861',
        destination:
          'https://www.academicjobs.com/employers/university-of-southern-queensland/3861',
        permanent: true,
      },
      {
        source: '/employers/queensland-university-of-technology-qut-/3786',
        destination:
          'https://www.academicjobs.com/employers/queensland-university-of-technology/3786',
        permanent: true,
      },
      {
        source: '/employers/queensland-university-of-technology-qut-/3786',
        destination:
          'https://www.academicjobs.com/employers/queensland-university-of-technology-qut-/3786',
        permanent: true,
      },
      {
        source: '/employers/university-of-sunshine-coast/3859',
        destination:
          'https://www.academicjobs.com/employers/university-of-sunshine-coast/3859',
        permanent: true,
      },
      {
        source: '/employers/charles-darwin-university/3880',
        destination:
          'https://www.academicjobs.com/employers/charles-darwin-university/3880',
        permanent: true,
      },
      {
        source: '/employers/the-university-of-adelaide/3737',
        destination:
          'https://www.academicjobs.com/employers/the-university-of-adelaide/3737',
        permanent: true,
      },
      {
        source: '/employers/carnegie-mellon-university/3146',
        destination:
          'https://www.academicjobs.com/employers/carnegie-mellon-university/3146',
        permanent: true,
      },
      {
        source: '/employers/torrens-university-australia/3875',
        destination:
          'https://www.academicjobs.com/employers/torrens-university-australia/3875',
        permanent: true,
      },
      {
        source: '/employers/university-of-south-australia/3874',
        destination:
          'https://www.academicjobs.com/employers/university-of-south-australia/3874',
        permanent: true,
      },
      {
        source: '/employers/flinders-university/3873',
        destination:
          'https://www.academicjobs.com/employers/flinders-university/3873',
        permanent: true,
      },
      {
        source: '/employers/university-of-western-australia/3173',
        destination:
          'https://www.academicjobs.com/employers/university-of-western-australia/3173',
        permanent: true,
      },
      {
        source: '/employers/university-of-notre-dame/3879',
        destination:
          'https://www.academicjobs.com/employers/university-of-notre-dame/3879',
        permanent: true,
      },
      {
        source: '/employers/murdoch-university/3878',
        destination:
          'https://www.academicjobs.com/employers/murdoch-university/3878',
        permanent: true,
      },
      {
        source: '/employers/edith-cowan-university/3877',
        destination:
          'https://www.academicjobs.com/employers/edith-cowan-university/3877',
        permanent: true,
      },
      {
        source: '/employers/curtin-university/3876',
        destination:
          'https://www.academicjobs.com/employers/curtin-university/3876',
        permanent: true,
      },
      {
        source: '/employers/australian-national-university/3739',
        destination:
          'https://www.academicjobs.com/employers/australian-national-university/3739',
        permanent: true,
      },
      {
        source: '/employers/university-of-canberra/3821',
        destination:
          'https://www.academicjobs.com/employers/university-of-canberra/3821',
        permanent: true,
      },
      {
        source: '/employers/university-of-new-south-wales/3738',
        destination:
          'https://www.academicjobs.com/employers/university-of-new-south-wales/3738',
        permanent: true,
      },
      {
        source: '/employers/charles-sturt-university/3855',
        destination:
          'https://www.academicjobs.com/employers/charles-sturt-university/3855',
        permanent: true,
      },
      {
        source: '/employers/southern-cross-university/3862',
        destination:
          'https://www.academicjobs.com/employers/southern-cross-university/3862',
        permanent: true,
      },
      {
        source: '/employers/university-of-technology-sydney/3864',
        destination:
          'https://www.academicjobs.com/employers/university-of-technology-sydney/3864',
        permanent: true,
      },
      {
        source: '/employers/macquarie-university/3881',
        destination:
          'https://www.academicjobs.com/employers/macquarie-university/3881',
        permanent: true,
      },
      {
        source: '/employers/university-of-new-england/3209',
        destination:
          'https://www.academicjobs.com/employers/university-of-new-england/3209',
        permanent: true,
      },
      {
        source: '/employers/university-of-newcastle/3863',
        destination:
          'https://www.academicjobs.com/employers/university-of-newcastle/3863',
        permanent: true,
      },
      {
        source: '/employers/university-of-western-sydney/3865',
        destination:
          'https://www.academicjobs.com/employers/university-of-western-sydney/3865',
        permanent: true,
      },
      {
        source: '/employers/university-of-wollongong/3866',
        destination:
          'https://www.academicjobs.com/employers/university-of-wollongong/3866',
        permanent: true,
      },
      {
        source: '/employers/australian-catholic-university/3853',
        destination:
          'https://www.academicjobs.com/employers/australian-catholic-university/3853',
        permanent: true,
      },
      {
        source: '/jobs/administration-support',
        destination: 'https://www.academicjobs.com/jobs/administration-support',
        permanent: true,
      },
      {
        source: '/jobs/victoria',
        destination: 'https://www.academicjobs.com/jobs/victoria',
        permanent: true,
      },
      {
        source: '/jobs/tasmania',
        destination: 'https://www.academicjobs.com/jobs/tasmania',
        permanent: true,
      },
      {
        source: '/jobs/queensland',
        destination: 'https://www.academicjobs.com/jobs/queensland',
        permanent: true,
      },
      {
        source: '/jobs/northern-territory',
        destination: 'https://www.academicjobs.com/jobs/northern-territory',
        permanent: true,
      },
      {
        source: '/jobs/south-australia',
        destination: 'https://www.academicjobs.com/jobs/south-australia',
        permanent: true,
      },
      {
        source: '/jobs/western-australia',
        destination: 'https://www.academicjobs.com/jobs/western-australia',
        permanent: true,
      },
      {
        source: '/jobs/act',
        destination: 'https://www.academicjobs.com/jobs/act',
        permanent: true,
      },
      {
        source: '/jobs/new-south-wales',
        destination: 'https://www.academicjobs.com/jobs/new-south-wales',
        permanent: true,
      },
      {
        source: '/jobs/bond-university-lecturing',
        destination:
          'https://www.academicjobs.com/jobs/bond-university-lecturing',
        permanent: true,
      },
      {
        source: '/jobs/bond-university-research',
        destination:
          'https://www.academicjobs.com/jobs/bond-university-research',
        permanent: true,
      },
      {
        source: '/jobs/bond-university-professor',
        destination:
          'https://www.academicjobs.com/jobs/bond-university-professor',
        permanent: true,
      },
      {
        source: '/jobs/bond-university-executive',
        destination:
          'https://www.academicjobs.com/jobs/bond-university-executive',
        permanent: true,
      },
      {
        source: '/jobs/bond-university-administration',
        destination:
          'https://www.academicjobs.com/jobs/bond-university-administration',
        permanent: true,
      },
      {
        source: '/jobs/bond-university-human-resources',
        destination:
          'https://www.academicjobs.com/jobs/bond-university-human-resources',
        permanent: true,
      },
      {
        source: '/jobs/qut-lecturing',
        destination: 'https://www.academicjobs.com/jobs/qut-lecturing',
        permanent: true,
      },
      {
        source: '/jobs/qut-research',
        destination: 'https://www.academicjobs.com/jobs/qut-research',
        permanent: true,
      },
      {
        source: '/jobs/qut-professor',
        destination: 'https://www.academicjobs.com/jobs/qut-professor',
        permanent: true,
      },
      {
        source: '/jobs/qut-university-executive',
        destination:
          'https://www.academicjobs.com/jobs/qut-university-executive',
        permanent: true,
      },
      {
        source: '/jobs/qut-university-administration',
        destination:
          'https://www.academicjobs.com/jobs/qut-university-administration',
        permanent: true,
      },
      {
        source: '/jobs/qut-university-human-resources',
        destination:
          'https://www.academicjobs.com/jobs/qut-university-human-resources',
        permanent: true,
      },
      {
        source: '/jobs/ucsd-lecturing',
        destination: 'https://www.academicjobs.com/jobs/ucsd-lecturing',
        permanent: true,
      },
      {
        source: '/jobs/ucsd-research',
        destination: 'https://www.academicjobs.com/jobs/ucsd-research',
        permanent: true,
      },
      {
        source: '/jobs/ucsd-professor',
        destination: 'https://www.academicjobs.com/jobs/ucsd-professor',
        permanent: true,
      },
      {
        source: '/jobs/ucsd-university-executive',
        destination:
          'https://www.academicjobs.com/jobs/ucsd-university-executive',
        permanent: true,
      },
      {
        source: '/jobs/ucsd-university-administration',
        destination:
          'https://www.academicjobs.com/jobs/ucsd-university-administration',
        permanent: true,
      },
      {
        source: '/jobs/ucsd-university-human-resources',
        destination:
          'https://www.academicjobs.com/jobs/ucsd-university-human-resources',
        permanent: true,
      },
      {
        source: '/executive/presidents-vice-chancellors',
        destination:
          'https://www.academicjobs.com/executive/presidents-vice-chancellors',
        permanent: true,
      },
      {
        source: '/executive/deputy-vice-chancellors-principals',
        destination:
          'https://www.academicjobs.com/executive/deputy-vice-chancellors-principals',
        permanent: true,
      },
      {
        source: '/executive/academic-vice-presidents-provosts',
        destination:
          'https://www.academicjobs.com/executive/academic-vice-presidents-provosts',
        permanent: true,
      },
      {
        source: '/executive/administrative-vice-presidents',
        destination:
          'https://www.academicjobs.com/executive/administrative-vice-presidents',
        permanent: true,
      },
      {
        source: '/executive/directors',
        destination: 'https://www.academicjobs.com/executive/directors',
        permanent: true,
      },
      {
        source: '/executive/deans',
        destination: 'https://www.academicjobs.com/executive/deans',
        permanent: true,
      },
      {
        source: '/executive/heads-department-chairs-department',
        destination:
          'https://www.academicjobs.com/executive/heads-department-chairs-department',
        permanent: true,
      },
      {
        source: '/executive/registrars-assistant-registrars',
        destination:
          'https://www.academicjobs.com/executive/registrars-assistant-registrars',
        permanent: true,
      },
      {
        source: '/executive/other-senior-management',
        destination:
          'https://www.academicjobs.com/executive/other-senior-management',
        permanent: true,
      },
      {
        source: '/hr-jobs/generalist-hr',
        destination: 'https://www.academicjobs.com/hr-jobs/generalist-hr',
        permanent: true,
      },
      {
        source: '/hr-jobs/industrial-employee-relations',
        destination:
          'https://www.academicjobs.com/hr-jobs/industrial-employee-relations',
        permanent: true,
      },
      {
        source: '/hr-jobs/management-internal',
        destination: 'https://www.academicjobs.com/hr-jobs/management-internal',
        permanent: true,
      },
      {
        source: '/hr-jobs/occupational-health-safety',
        destination:
          'https://www.academicjobs.com/hr-jobs/occupational-health-safety',
        permanent: true,
      },
      {
        source: '/hr-jobs/organisational-development',
        destination:
          'https://www.academicjobs.com/hr-jobs/organisational-development',
        permanent: true,
      },
      {
        source: '/hr-jobs/recruitment-internal',
        destination:
          'https://www.academicjobs.com/hr-jobs/recruitment-internal',
        permanent: true,
      },
      {
        source: '/hr-jobs/remuneration-benefits',
        destination:
          'https://www.academicjobs.com/hr-jobs/remuneration-benefits',
        permanent: true,
      },
      {
        source: '/hr-jobs/training-development',
        destination:
          'https://www.academicjobs.com/hr-jobs/training-development',
        permanent: true,
      },
      {
        source: '/industry/biological-biomedical-sciences',
        destination:
          'https://www.academicjobs.com/industry/biological-biomedical-sciences',
        permanent: true,
      },
      {
        source: '/industry/biotechnology-genetics',
        destination:
          'https://www.academicjobs.com/industry/biotechnology-genetics',
        permanent: true,
      },
      {
        source: '/industry/chemistry-physics',
        destination: 'https://www.academicjobs.com/industry/chemistry-physics',
        permanent: true,
      },
      {
        source: '/industry/environmental-earth-geosciences',
        destination:
          'https://www.academicjobs.com/industry/environmental-earth-geosciences',
        permanent: true,
      },
      {
        source: '/industry/laboratory-technical-services',
        destination:
          'https://www.academicjobs.com/industry/laboratory-technical-services',
        permanent: true,
      },
      {
        source: '/industry/materials-sciences',
        destination: 'https://www.academicjobs.com/industry/materials-sciences',
        permanent: true,
      },
      {
        source: '/industry/mathematics-statistics-information-sciences',
        destination:
          'https://www.academicjobs.com/industry/mathematics-statistics-information-sciences',
        permanent: true,
      },
      {
        source: '/industry/energy',
        destination: 'https://www.academicjobs.com/industry/energy',
        permanent: true,
      },
      {
        source: '/faculty/agriculture',
        destination: 'https://www.academicjobs.com/faculty/agriculture',
        permanent: true,
      },
      {
        source: '/faculty/agricultural-economics-agribusiness',
        destination:
          'https://www.academicjobs.com/faculty/agricultural-economics-agribusiness',
        permanent: true,
      },
      {
        source: '/faculty/animal-science',
        destination: 'https://www.academicjobs.com/faculty/animal-science',
        permanent: true,
      },
      {
        source: '/faculty/entomology',
        destination: 'https://www.academicjobs.com/faculty/entomology',
        permanent: true,
      },
      {
        source: '/faculty/environmental-science-ecology-forestry',
        destination:
          'https://www.academicjobs.com/faculty/environmental-science-ecology-forestry',
        permanent: true,
      },
      {
        source: '/faculty/agricultural-extension',
        destination:
          'https://www.academicjobs.com/faculty/agricultural-extension',
        permanent: true,
      },
      {
        source: '/faculty/food-science',
        destination: 'https://www.academicjobs.com/faculty/food-science',
        permanent: true,
      },
      {
        source: '/faculty/horticulture-landscape-architecture',
        destination:
          'https://www.academicjobs.com/faculty/horticulture-landscape-architecture',
        permanent: true,
      },
      {
        source: '/faculty/plant-soil-science',
        destination: 'https://www.academicjobs.com/faculty/plant-soil-science',
        permanent: true,
      },
      {
        source: '/faculty/veterinary-medicine',
        destination: 'https://www.academicjobs.com/faculty/veterinary-medicine',
        permanent: true,
      },
      {
        source: '/faculty/business',
        destination: 'https://www.academicjobs.com/faculty/business',
        permanent: true,
      },
      {
        source: '/faculty/accounting',
        destination: 'https://www.academicjobs.com/faculty/accounting',
        permanent: true,
      },
      {
        source: '/faculty/administration',
        destination: 'https://www.academicjobs.com/faculty/administration',
        permanent: true,
      },
      {
        source: '/faculty/law',
        destination: 'https://www.academicjobs.com/faculty/law',
        permanent: true,
      },
      {
        source: '/faculty/entrepreneurship',
        destination: 'https://www.academicjobs.com/faculty/entrepreneurship',
        permanent: true,
      },
      {
        source: '/faculty/finance',
        destination: 'https://www.academicjobs.com/faculty/finance',
        permanent: true,
      },
      {
        source: '/faculty/hotel-restaurant-management',
        destination:
          'https://www.academicjobs.com/faculty/hotel-restaurant-management',
        permanent: true,
      },
      {
        source: '/faculty/business-human-resources',
        destination:
          'https://www.academicjobs.com/faculty/business-human-resources',
        permanent: true,
      },
      {
        source: '/faculty/information-systems-technology',
        destination:
          'https://www.academicjobs.com/faculty/information-systems-technology',
        permanent: true,
      },
      {
        source: '/faculty/international-business',
        destination:
          'https://www.academicjobs.com/faculty/international-business',
        permanent: true,
      },
      {
        source: '/faculty/business-management',
        destination: 'https://www.academicjobs.com/faculty/business-management',
        permanent: true,
      },
      {
        source: '/faculty/marketing-sales',
        destination: 'https://www.academicjobs.com/faculty/marketing-sales',
        permanent: true,
      },
      {
        source: '/faculty/other-business-specialities',
        destination:
          'https://www.academicjobs.com/faculty/other-business-specialities',
        permanent: true,
      },
      {
        source: '/faculty/communications',
        destination: 'https://www.academicjobs.com/faculty/communications',
        permanent: true,
      },
      {
        source: '/faculty/broadcast-journalism',
        destination:
          'https://www.academicjobs.com/faculty/broadcast-journalism',
        permanent: true,
      },
      {
        source: '/faculty/journalism',
        destination: 'https://www.academicjobs.com/faculty/journalism',
        permanent: true,
      },
      {
        source: '/faculty/media-communication-studies',
        destination:
          'https://www.academicjobs.com/faculty/media-communication-studies',
        permanent: true,
      },
      {
        source: '/faculty/public-relations-advertising',
        destination:
          'https://www.academicjobs.com/faculty/public-relations-advertising',
        permanent: true,
      },
      {
        source: '/faculty/radio-television-film',
        destination:
          'https://www.academicjobs.com/faculty/radio-television-film',
        permanent: true,
      },
      {
        source: '/faculty/speech-and-public-speaking',
        destination:
          'https://www.academicjobs.com/faculty/speech-and-public-speaking',
        permanent: true,
      },
      {
        source: '/faculty/other-communications-specialities',
        destination:
          'https://www.academicjobs.com/faculty/other-communications-specialities',
        permanent: true,
      },
      {
        source: '/faculty/education',
        destination: 'https://www.academicjobs.com/faculty/education',
        permanent: true,
      },
      {
        source: '/faculty/adult-distance',
        destination: 'https://www.academicjobs.com/faculty/adult-distance',
        permanent: true,
      },
      {
        source: '/faculty/counselor',
        destination: 'https://www.academicjobs.com/faculty/counselor',
        permanent: true,
      },
      {
        source: '/faculty/curriculum-instruction',
        destination:
          'https://www.academicjobs.com/faculty/curriculum-instruction',
        permanent: true,
      },
      {
        source: '/faculty/educational-administration-leadership',
        destination:
          'https://www.academicjobs.com/faculty/educational-administration-leadership',
        permanent: true,
      },
      {
        source: '/faculty/educational-psychology',
        destination:
          'https://www.academicjobs.com/faculty/educational-psychology',
        permanent: true,
      },
      {
        source: '/faculty/higher-education',
        destination: 'https://www.academicjobs.com/faculty/higher-education',
        permanent: true,
      },
      {
        source: '/faculty/instructional-technology-design',
        destination:
          'https://www.academicjobs.com/faculty/instructional-technology-design',
        permanent: true,
      },
      {
        source: '/faculty/reading-literacy',
        destination: 'https://www.academicjobs.com/faculty/reading-literacy',
        permanent: true,
      },
      {
        source: '/faculty/school-psychology',
        destination: 'https://www.academicjobs.com/faculty/school-psychology',
        permanent: true,
      },
      {
        source: '/faculty/special-teacher-education',
        destination:
          'https://www.academicjobs.com/faculty/special-teacher-education',
        permanent: true,
      },
      {
        source: '/faculty/teacher-education',
        destination: 'https://www.academicjobs.com/faculty/teacher-education',
        permanent: true,
      },
      {
        source: '/faculty/teacher-education-in-early-childhood',
        destination:
          'https://www.academicjobs.com/faculty/teacher-education-in-early-childhood',
        permanent: true,
      },
      {
        source: '/faculty/teacher-education-elementary-school',
        destination:
          'https://www.academicjobs.com/faculty/teacher-education-elementary-school',
        permanent: true,
      },
      {
        source: '/faculty/teacher-education-middle-school',
        destination:
          'https://www.academicjobs.com/faculty/teacher-education-middle-school',
        permanent: true,
      },
      {
        source: '/faculty/teacher-education-secondary-school',
        destination:
          'https://www.academicjobs.com/faculty/teacher-education-secondary-school',
        permanent: true,
      },
      {
        source: '/faculty/other-education-specialities',
        destination:
          'https://www.academicjobs.com/faculty/other-education-specialities',
        permanent: true,
      },
      {
        source: '/faculty/engineering',
        destination: 'https://www.academicjobs.com/faculty/engineering',
        permanent: true,
      },
      {
        source: '/faculty/aerospace',
        destination: 'https://www.academicjobs.com/faculty/aerospace',
        permanent: true,
      },
      {
        source: '/faculty/agricultural-engineering',
        destination:
          'https://www.academicjobs.com/faculty/agricultural-engineering',
        permanent: true,
      },
      {
        source: '/faculty/biological-engineering',
        destination:
          'https://www.academicjobs.com/faculty/biological-engineering',
        permanent: true,
      },
      {
        source: '/faculty/chemical-engineering',
        destination:
          'https://www.academicjobs.com/faculty/chemical-engineering',
        permanent: true,
      },
      {
        source: '/faculty/civil-environmental-engineering',
        destination:
          'https://www.academicjobs.com/faculty/civil-environmental-engineering',
        permanent: true,
      },
      {
        source: '/faculty/omputer-engineering-jobs',
        destination:
          'https://www.academicjobs.com/faculty/omputer-engineering-jobs',
        permanent: true,
      },
      {
        source: '/faculty/electrical-engineering-jobs',
        destination:
          'https://www.academicjobs.com/faculty/electrical-engineering-jobs',
        permanent: true,
      },
      {
        source: '/faculty/industrial-and-manufacturing-engineering-jobs',
        destination:
          'https://www.academicjobs.com/faculty/industrial-and-manufacturing-engineering-jobs',
        permanent: true,
      },
      {
        source: '/faculty/mechanical',
        destination: 'https://www.academicjobs.com/faculty/mechanical',
        permanent: true,
      },
      {
        source: '/faculty/other-engineering-specialities',
        destination:
          'https://www.academicjobs.com/faculty/other-engineering-specialities',
        permanent: true,
      },
      {
        source: '/faculty/fine-applied-arts',
        destination: 'https://www.academicjobs.com/faculty/fine-applied-arts',
        permanent: true,
      },
      {
        source: '/faculty/architecture',
        destination: 'https://www.academicjobs.com/faculty/architecture',
        permanent: true,
      },
      {
        source: '/faculty/art',
        destination: 'https://www.academicjobs.com/faculty/art',
        permanent: true,
      },
      {
        source: '/faculty/art-history',
        destination: 'https://www.academicjobs.com/faculty/art-history',
        permanent: true,
      },
      {
        source: '/faculty/dance',
        destination: 'https://www.academicjobs.com/faculty/dance',
        permanent: true,
      },
      {
        source: '/faculty/digital-arts',
        destination: 'https://www.academicjobs.com/faculty/digital-arts',
        permanent: true,
      },
      {
        source: '/faculty/fashion-textile-design',
        destination:
          'https://www.academicjobs.com/faculty/fashion-textile-design',
        permanent: true,
      },
      {
        source: '/faculty/graphic-design',
        destination: 'https://www.academicjobs.com/faculty/graphic-design',
        permanent: true,
      },
      {
        source: '/faculty/industrial-design',
        destination: 'https://www.academicjobs.com/faculty/industrial-design',
        permanent: true,
      },
      {
        source: '/faculty/interior-design',
        destination: 'https://www.academicjobs.com/faculty/interior-design',
        permanent: true,
      },
      {
        source: '/faculty/music',
        destination: 'https://www.academicjobs.com/faculty/music',
        permanent: true,
      },
      {
        source: '/faculty/photography',
        destination: 'https://www.academicjobs.com/faculty/photography',
        permanent: true,
      },
      {
        source: '/faculty/theatre',
        destination: 'https://www.academicjobs.com/faculty/theatre',
        permanent: true,
      },
      {
        source: '/faculty/other-fine-applied-arts-specialities',
        destination:
          'https://www.academicjobs.com/faculty/other-fine-applied-arts-specialities',
        permanent: true,
      },
      {
        source: '/faculty/health-sciences',
        destination: 'https://www.academicjobs.com/faculty/health-sciences',
        permanent: true,
      },
      {
        source: '/faculty/athletic-training',
        destination: 'https://www.academicjobs.com/faculty/athletic-training',
        permanent: true,
      },
      {
        source: '/faculty/communication-sciences-and-disorders',
        destination:
          'https://www.academicjobs.com/faculty/communication-sciences-and-disorders',
        permanent: true,
      },
      {
        source: '/faculty/health-education-promotion',
        destination:
          'https://www.academicjobs.com/faculty/health-education-promotion',
        permanent: true,
      },
      {
        source: '/faculty/health-information-technology',
        destination:
          'https://www.academicjobs.com/faculty/health-information-technology',
        permanent: true,
      },
      {
        source: '/faculty/healthcare-administration',
        destination:
          'https://www.academicjobs.com/faculty/healthcare-administration',
        permanent: true,
      },
      {
        source: '/faculty/kinesiology-exercise-science-phys-ed',
        destination:
          'https://www.academicjobs.com/faculty/kinesiology-exercise-science-phys-ed',
        permanent: true,
      },
      {
        source: '/faculty/nursing',
        destination: 'https://www.academicjobs.com/faculty/nursing',
        permanent: true,
      },
      {
        source: '/faculty/nutrition-dietetics',
        destination: 'https://www.academicjobs.com/faculty/nutrition-dietetics',
        permanent: true,
      },
      {
        source: '/faculty/occupational-therapy',
        destination:
          'https://www.academicjobs.com/faculty/occupational-therapy',
        permanent: true,
      },
      {
        source: '/faculty/physical-therapy',
        destination: 'https://www.academicjobs.com/faculty/physical-therapy',
        permanent: true,
      },
      {
        source: '/faculty/public-environmental-health',
        destination:
          'https://www.academicjobs.com/faculty/public-environmental-health',
        permanent: true,
      },
      {
        source: '/faculty/recreation-leisure-studies',
        destination:
          'https://www.academicjobs.com/faculty/recreation-leisure-studies',
        permanent: true,
      },
      {
        source: '/faculty/sport-management',
        destination: 'https://www.academicjobs.com/faculty/sport-management',
        permanent: true,
      },
      {
        source: '/faculty/other-health-sciences-specialities',
        destination:
          'https://www.academicjobs.com/faculty/other-health-sciences-specialities',
        permanent: true,
      },
      {
        source: '/faculty/law-and-legal-studies',
        destination:
          'https://www.academicjobs.com/faculty/law-and-legal-studies',
        permanent: true,
      },
      {
        source: '/faculty/liberal-arts',
        destination: 'https://www.academicjobs.com/faculty/liberal-arts',
        permanent: true,
      },
      {
        source: '/faculty/american-studies',
        destination: 'https://www.academicjobs.com/faculty/american-studies',
        permanent: true,
      },
      {
        source: '/faculty/anthropology',
        destination: 'https://www.academicjobs.com/faculty/anthropology',
        permanent: true,
      },
      {
        source: '/faculty/criminal-justice',
        destination: 'https://www.academicjobs.com/faculty/criminal-justice',
        permanent: true,
      },
      {
        source: '/faculty/english-literature',
        destination: 'https://www.academicjobs.com/faculty/english-literature',
        permanent: true,
      },
      {
        source: '/faculty/english-as-a-second-language',
        destination:
          'https://www.academicjobs.com/faculty/english-as-a-second-language',
        permanent: true,
      },
      {
        source: '/faculty/ethnic-multicultural-studies',
        destination:
          'https://www.academicjobs.com/faculty/ethnic-multicultural-studies',
        permanent: true,
      },
      {
        source: '/faculty/foreign-languages-literatures',
        destination:
          'https://www.academicjobs.com/faculty/foreign-languages-literatures',
        permanent: true,
      },
      {
        source: '/faculty/history',
        destination: 'https://www.academicjobs.com/faculty/history',
        permanent: true,
      },
      {
        source: '/faculty/human-development-family-studies',
        destination:
          'https://www.academicjobs.com/faculty/human-development-family-studies',
        permanent: true,
      },
      {
        source: '/faculty/humanities',
        destination: 'https://www.academicjobs.com/faculty/humanities',
        permanent: true,
      },
      {
        source: '/faculty/linguistics',
        destination: 'https://www.academicjobs.com/faculty/linguistics',
        permanent: true,
      },
      {
        source: '/faculty/philosophy',
        destination: 'https://www.academicjobs.com/faculty/philosophy',
        permanent: true,
      },
      {
        source: '/faculty/political-science',
        destination: 'https://www.academicjobs.com/faculty/political-science',
        permanent: true,
      },
      {
        source: '/faculty/psychology',
        destination: 'https://www.academicjobs.com/faculty/psychology',
        permanent: true,
      },
      {
        source: '/faculty/public-administration-policy',
        destination:
          'https://www.academicjobs.com/faculty/public-administration-policy',
        permanent: true,
      },
      {
        source: '/faculty/religious-studies-theology',
        destination:
          'https://www.academicjobs.com/faculty/religious-studies-theology',
        permanent: true,
      },
      {
        source: '/faculty/security-studies',
        destination: 'https://www.academicjobs.com/faculty/security-studies',
        permanent: true,
      },
      {
        source: '/faculty/sign-language',
        destination: 'https://www.academicjobs.com/faculty/sign-language',
        permanent: true,
      },
      {
        source: '/faculty/social-work',
        destination: 'https://www.academicjobs.com/faculty/social-work',
        permanent: true,
      },
      {
        source: '/faculty/sociology',
        destination: 'https://www.academicjobs.com/faculty/sociology',
        permanent: true,
      },
      {
        source: '/faculty/urban-studies-planning',
        destination:
          'https://www.academicjobs.com/faculty/urban-studies-planning',
        permanent: true,
      },
      {
        source: '/faculty/womens-gender-studies',
        destination:
          'https://www.academicjobs.com/faculty/womens-gender-studies',
        permanent: true,
      },
      {
        source: '/faculty/other-liberal-arts-specialities',
        destination:
          'https://www.academicjobs.com/faculty/other-liberal-arts-specialities',
        permanent: true,
      },
      {
        source: '/faculty/medicine',
        destination: 'https://www.academicjobs.com/faculty/medicine',
        permanent: true,
      },
      {
        source: '/faculty/chiropractic',
        destination: 'https://www.academicjobs.com/faculty/chiropractic',
        permanent: true,
      },
      {
        source: '/faculty/dentistry',
        destination: 'https://www.academicjobs.com/faculty/dentistry',
        permanent: true,
      },
      {
        source: '/faculty/medical-research',
        destination: 'https://www.academicjobs.com/faculty/medical-research',
        permanent: true,
      },
      {
        source: '/faculty/pharmacy-pharmacology',
        destination:
          'https://www.academicjobs.com/faculty/pharmacy-pharmacology',
        permanent: true,
      },
      {
        source: '/faculty/physician-assistants',
        destination:
          'https://www.academicjobs.com/faculty/physician-assistants',
        permanent: true,
      },
      {
        source: '/faculty/physicians',
        destination: 'https://www.academicjobs.com/faculty/physicians',
        permanent: true,
      },
      {
        source: '/faculty/other-medicine-specialities',
        destination:
          'https://www.academicjobs.com/faculty/other-medicine-specialities',
        permanent: true,
      },
      {
        source: '/faculty/science',
        destination: 'https://www.academicjobs.com/faculty/science',
        permanent: true,
      },
      {
        source: '/faculty/astronomy-astrophysics',
        destination:
          'https://www.academicjobs.com/faculty/astronomy-astrophysics',
        permanent: true,
      },
      {
        source: '/faculty/biochemistry-molecular-biology',
        destination:
          'https://www.academicjobs.com/faculty/biochemistry-molecular-biology',
        permanent: true,
      },
      {
        source: '/faculty/biology',
        destination: 'https://www.academicjobs.com/faculty/biology',
        permanent: true,
      },
      {
        source: '/faculty/chemistry',
        destination: 'https://www.academicjobs.com/faculty/chemistry',
        permanent: true,
      },
      {
        source: '/faculty/computer-science',
        destination: 'https://www.academicjobs.com/faculty/computer-science',
        permanent: true,
      },
      {
        source: '/faculty/geography',
        destination: 'https://www.academicjobs.com/faculty/geography',
        permanent: true,
      },
      {
        source: '/faculty/geology-earth-sciences-oceanography',
        destination:
          'https://www.academicjobs.com/faculty/geology-earth-sciences-oceanography',
        permanent: true,
      },
      {
        source: '/faculty/library-information-science',
        destination:
          'https://www.academicjobs.com/faculty/library-information-science',
        permanent: true,
      },
      {
        source: '/faculty/mathematics',
        destination: 'https://www.academicjobs.com/faculty/mathematics',
        permanent: true,
      },
      {
        source: '/faculty/physics',
        destination: 'https://www.academicjobs.com/faculty/physics',
        permanent: true,
      },
      {
        source: '/faculty/statistics',
        destination: 'https://www.academicjobs.com/faculty/statistics',
        permanent: true,
      },
      {
        source: '/faculty/other-science-specialities',
        destination:
          'https://www.academicjobs.com/faculty/other-science-specialities',
        permanent: true,
      },
      {
        source: '/faculty/technical-career',
        destination: 'https://www.academicjobs.com/faculty/technical-career',
        permanent: true,
      },
      {
        source: '/faculty/automotive-technology',
        destination:
          'https://www.academicjobs.com/faculty/automotive-technology',
        permanent: true,
      },
      {
        source: '/faculty/aviation',
        destination: 'https://www.academicjobs.com/faculty/aviation',
        permanent: true,
      },
      {
        source: '/faculty/construction-building-trades',
        destination:
          'https://www.academicjobs.com/faculty/construction-building-trades',
        permanent: true,
      },
      {
        source: '/faculty/cosmetology',
        destination: 'https://www.academicjobs.com/faculty/cosmetology',
        permanent: true,
      },
      {
        source: '/faculty/culinary-arts',
        destination: 'https://www.academicjobs.com/faculty/culinary-arts',
        permanent: true,
      },
      {
        source: '/faculty/dental-hygienists-assistants',
        destination:
          'https://www.academicjobs.com/faculty/dental-hygienists-assistants',
        permanent: true,
      },
      {
        source: '/faculty/diagnostic-imaging-radiography',
        destination:
          'https://www.academicjobs.com/faculty/diagnostic-imaging-radiography',
        permanent: true,
      },
      {
        source: '/faculty/electronics',
        destination: 'https://www.academicjobs.com/faculty/electronics',
        permanent: true,
      },
      {
        source: '/faculty/fire-science',
        destination: 'https://www.academicjobs.com/faculty/fire-science',
        permanent: true,
      },
      {
        source: '/faculty/massage-therapy',
        destination: 'https://www.academicjobs.com/faculty/massage-therapy',
        permanent: true,
      },
      {
        source: '/faculty/medical-assistants',
        destination: 'https://www.academicjobs.com/faculty/medical-assistants',
        permanent: true,
      },
      {
        source: '/faculty/medical-billing-and-coding',
        destination:
          'https://www.academicjobs.com/faculty/medical-billing-and-coding',
        permanent: true,
      },
      {
        source: '/faculty/paramedics-and-emts',
        destination: 'https://www.academicjobs.com/faculty/paramedics-and-emts',
        permanent: true,
      },
      {
        source: '/faculty/respiratory-care',
        destination: 'https://www.academicjobs.com/faculty/respiratory-care',
        permanent: true,
      },
      {
        source: '/faculty/surgical-technology',
        destination: 'https://www.academicjobs.com/faculty/surgical-technology',
        permanent: true,
      },
      {
        source: '/faculty/telecommunications',
        destination: 'https://www.academicjobs.com/faculty/telecommunications',
        permanent: true,
      },
      {
        source: '/faculty/tourism',
        destination: 'https://www.academicjobs.com/faculty/tourism',
        permanent: true,
      },
      {
        source: '/africa/student',
        destination: 'https://www.academicjobs.com/africa/student',
        permanent: true,
      },
      {
        source: '/africa/lecturer',
        destination: 'https://www.academicjobs.com/africa/lecturer',
        permanent: true,
      },
      {
        source: '/africa/research',
        destination: 'https://www.academicjobs.com/africa/research',
        permanent: true,
      },
      {
        source: '/africa/executive',
        destination: 'https://www.academicjobs.com/africa/executive',
        permanent: true,
      },
      {
        source: '/africa/hr-jobs',
        destination: 'https://www.academicjobs.com/africa/hr-jobs',
        permanent: true,
      },
      {
        source: '/africa/professor',
        destination: 'https://www.academicjobs.com/africa/professor',
        permanent: true,
      },
      {
        source: '/africa/admin',
        destination: 'https://www.academicjobs.com/africa/admin',
        permanent: true,
      },
      {
        source: '/asia/student',
        destination: 'https://www.academicjobs.com/asia/student',
        permanent: true,
      },
      {
        source: '/asia/lecturer',
        destination: 'https://www.academicjobs.com/asia/lecturer',
        permanent: true,
      },
      {
        source: '/asia/research',
        destination: 'https://www.academicjobs.com/asia/research',
        permanent: true,
      },
      {
        source: '/asia/executive',
        destination: 'https://www.academicjobs.com/asia/executive',
        permanent: true,
      },
      {
        source: '/asia/hr-jobs',
        destination: 'https://www.academicjobs.com/asia/hr-jobs',
        permanent: true,
      },
      {
        source: '/asia/professor',
        destination: 'https://www.academicjobs.com/asia/professor',
        permanent: true,
      },
      {
        source: '/asia/admin',
        destination: 'https://www.academicjobs.com/asia/admin',
        permanent: true,
      },
      {
        source: '/canada/student',
        destination: 'https://www.academicjobs.com/canada/student',
        permanent: true,
      },
      {
        source: '/canada/lecturer',
        destination: 'https://www.academicjobs.com/canada/lecturer',
        permanent: true,
      },
      {
        source: '/canada/research',
        destination: 'https://www.academicjobs.com/canada/research',
        permanent: true,
      },
      {
        source: '/canada/executive',
        destination: 'https://www.academicjobs.com/canada/executive',
        permanent: true,
      },
      {
        source: '/canada/hr-jobs',
        destination: 'https://www.academicjobs.com/canada/hr-jobs',
        permanent: true,
      },
      {
        source: '/canada/professor',
        destination: 'https://www.academicjobs.com/canada/professor',
        permanent: true,
      },
      {
        source: '/canada/admin',
        destination: 'https://www.academicjobs.com/canada/admin',
        permanent: true,
      },
      {
        source: '/europe/student',
        destination: 'https://www.academicjobs.com/europe/student',
        permanent: true,
      },
      {
        source: '/europe/lecturer',
        destination: 'https://www.academicjobs.com/europe/lecturer',
        permanent: true,
      },
      {
        source: '/europe/research',
        destination: 'https://www.academicjobs.com/europe/research',
        permanent: true,
      },
      {
        source: '/europe/executive',
        destination: 'https://www.academicjobs.com/europe/executive',
        permanent: true,
      },
      {
        source: '/europe/hr-jobs',
        destination: 'https://www.academicjobs.com/europe/hr-jobs',
        permanent: true,
      },
      {
        source: '/europe/professor',
        destination: 'https://www.academicjobs.com/europe/professor',
        permanent: true,
      },
      {
        source: '/europe/admin',
        destination: 'https://www.academicjobs.com/europe/admin',
        permanent: true,
      },
      {
        source: '/india/student',
        destination: 'https://www.academicjobs.com/india/student',
        permanent: true,
      },
      {
        source: '/india/lecturer',
        destination: 'https://www.academicjobs.com/india/lecturer',
        permanent: true,
      },
      {
        source: '/india/research',
        destination: 'https://www.academicjobs.com/india/research',
        permanent: true,
      },
      {
        source: '/india/executive',
        destination: 'https://www.academicjobs.com/india/executive',
        permanent: true,
      },
      {
        source: '/india/hr-jobs',
        destination: 'https://www.academicjobs.com/india/hr-jobs',
        permanent: true,
      },
      {
        source: '/india/professor',
        destination: 'https://www.academicjobs.com/india/professor',
        permanent: true,
      },
      {
        source: '/india/admin',
        destination: 'https://www.academicjobs.com/india/admin',
        permanent: true,
      },
      {
        source: '/south-america/student',
        destination: 'https://www.academicjobs.com/south-america/student',
        permanent: true,
      },
      {
        source: '/south-america/lecturer',
        destination: 'https://www.academicjobs.com/south-america/lecturer',
        permanent: true,
      },
      {
        source: '/south-america/research',
        destination: 'https://www.academicjobs.com/south-america/research',
        permanent: true,
      },
      {
        source: '/south-america/executive',
        destination: 'https://www.academicjobs.com/south-america/executive',
        permanent: true,
      },
      {
        source: '/south-america/hr-jobs',
        destination: 'https://www.academicjobs.com/south-america/hr-jobs',
        permanent: true,
      },
      {
        source: '/south-america/professor',
        destination: 'https://www.academicjobs.com/south-america/professor',
        permanent: true,
      },
      {
        source: '/south-america/admin',
        destination: 'https://www.academicjobs.com/south-america/admin',
        permanent: true,
      },
      {
        source: '/middle-east/student',
        destination: 'https://www.academicjobs.com/middle-east/student',
        permanent: true,
      },
      {
        source: '/middle-east/lecturer',
        destination: 'https://www.academicjobs.com/middle-east/lecturer',
        permanent: true,
      },
      {
        source: '/middle-east/research',
        destination: 'https://www.academicjobs.com/middle-east/research',
        permanent: true,
      },
      {
        source: '/middle-east/executive',
        destination: 'https://www.academicjobs.com/middle-east/executive',
        permanent: true,
      },
      {
        source: '/middle-east/hr-jobs',
        destination: 'https://www.academicjobs.com/middle-east/hr-jobs',
        permanent: true,
      },
      {
        source: '/middle-east/professor',
        destination: 'https://www.academicjobs.com/middle-east/professor',
        permanent: true,
      },
      {
        source: '/middle-east/admin',
        destination: 'https://www.academicjobs.com/middle-east/admin',
        permanent: true,
      },
      {
        source: '/new-zealand/student',
        destination: 'https://www.academicjobs.com/new-zealand/student',
        permanent: true,
      },
      {
        source: '/new-zealand/lecturer',
        destination: 'https://www.academicjobs.com/new-zealand/lecturer',
        permanent: true,
      },
      {
        source: '/new-zealand/research',
        destination: 'https://www.academicjobs.com/new-zealand/research',
        permanent: true,
      },
      {
        source: '/new-zealand/executive',
        destination: 'https://www.academicjobs.com/new-zealand/executive',
        permanent: true,
      },
      {
        source: '/new-zealand/hr-jobs',
        destination: 'https://www.academicjobs.com/new-zealand/hr-jobs',
        permanent: true,
      },
      {
        source: '/new-zealand/professor',
        destination: 'https://www.academicjobs.com/new-zealand/professor',
        permanent: true,
      },
      {
        source: '/new-zealand/admin',
        destination: 'https://www.academicjobs.com/new-zealand/admin',
        permanent: true,
      },
      {
        source: '/uk/student',
        destination: 'https://www.academicjobs.com/uk/student',
        permanent: true,
      },
      {
        source: '/uk/lecturer',
        destination: 'https://www.academicjobs.com/uk/lecturer',
        permanent: true,
      },
      {
        source: '/uk/research',
        destination: 'https://www.academicjobs.com/uk/research',
        permanent: true,
      },
      {
        source: '/uk/executive',
        destination: 'https://www.academicjobs.com/uk/executive',
        permanent: true,
      },
      {
        source: '/uk/hr-jobs',
        destination: 'https://www.academicjobs.com/uk/hr-jobs',
        permanent: true,
      },
      {
        source: '/uk/professor',
        destination: 'https://www.academicjobs.com/uk/professor',
        permanent: true,
      },
      {
        source: '/uk/admin',
        destination: 'https://www.academicjobs.com/uk/admin',
        permanent: true,
      },

      {
        source: '/singapore',
        destination: 'https://www.academicjobs.com/singapore',
        permanent: true,
      },
      {
        source: '/london',
        destination: 'https://www.academicjobs.com/london',
        permanent: true,
      },
      {
        source: '/new-york',
        destination: 'https://www.academicjobs.com/new-york',
        permanent: true,
      },
      {
        source: '/boston',
        destination: 'https://www.academicjobs.com/boston',
        permanent: true,
      },
      {
        source: '/los-angeles',
        destination: 'https://www.academicjobs.com/los-angeles',
        permanent: true,
      },
      {
        source: '/san-francisco',
        destination: 'https://www.academicjobs.com/san-francisco',
        permanent: true,
      },
      {
        source: '/chicago',
        destination: 'https://www.academicjobs.com/chicago',
        permanent: true,
      },
      {
        source: '/san-diego',
        destination: 'https://www.academicjobs.com/san-diego',
        permanent: true,
      },
      {
        source: '/washington-dc',
        destination: 'https://www.academicjobs.com/washington-dc',
        permanent: true,
      },
      {
        source: '/philadelphia',
        destination: 'https://www.academicjobs.com/philadelphia',
        permanent: true,
      },
      {
        source: '/atlanta',
        destination: 'https://www.academicjobs.com/atlanta',
        permanent: true,
      },
      {
        source: '/seattle',
        destination: 'https://www.academicjobs.com/seattle',
        permanent: true,
      },
      {
        source: '/pittsburgh',
        destination: 'https://www.academicjobs.com/pittsburgh',
        permanent: true,
      },
      {
        source: '/new-haven',
        destination: 'https://www.academicjobs.com/new-haven',
        permanent: true,
      },
      {
        source: '/edinburgh',
        destination: 'https://www.academicjobs.com/edinburgh',
        permanent: true,
      },
      {
        source: '/manchester',
        destination: 'https://www.academicjobs.com/manchester',
        permanent: true,
      },
      {
        source: '/toronto',
        destination: 'https://www.academicjobs.com/toronto',
        permanent: true,
      },
      {
        source: '/vancouver',
        destination: 'https://www.academicjobs.com/vancouver',
        permanent: true,
      },
      {
        source: '/montreal',
        destination: 'https://www.academicjobs.com/montreal',
        permanent: true,
      },
      {
        source: '/hong-kong',
        destination: 'https://www.academicjobs.com/hong-kong',
        permanent: true,
      },
      {
        source: '/beijing',
        destination: 'https://www.academicjobs.com/beijing',
        permanent: true,
      },
      {
        source: '/tokyo',
        destination: 'https://www.academicjobs.com/tokyo',
        permanent: true,
      },
      {
        source: '/paris',
        destination: 'https://www.academicjobs.com/paris',
        permanent: true,
      },
      {
        source: '/zurich',
        destination: 'https://www.academicjobs.com/zurich',
        permanent: true,
      },
      {
        source: '/munich',
        destination: 'https://www.academicjobs.com/munich',
        permanent: true,
      },
      {
        source: '/amsterdam',
        destination: 'https://www.academicjobs.com/amsterdam',
        permanent: true,
      },
      {
        source: '/copenhagen',
        destination: 'https://www.academicjobs.com/copenhagen',
        permanent: true,
      },
      {
        source: '/stockholm',
        destination: 'https://www.academicjobs.com/stockholm',
        permanent: true,
      },
      {
        source: '/academic-talent-pool',
        destination: 'https://www.academicjobs.com/academic-talent-pool',
        permanent: true,
      },
      {
        source: '/graduate',
        destination: 'https://www.academicjobs.com/graduate',
        permanent: true,
      },
      {
        source: '/africa/faculty',
        destination: 'https://www.academicjobs.com/africa/faculty',
        permanent: true,
      },
      {
        source: '/africa/graduate',
        destination: 'https://www.academicjobs.com/africa/graduate',
        permanent: true,
      },
      {
        source: '/africa/phd',
        destination: 'https://www.academicjobs.com/africa/phd',
        permanent: true,
      },
      {
        source: '/australia/faculty',
        destination: 'https://www.academicjobs.com/australia/faculty',
        permanent: true,
      },
      {
        source: '/australia/graduate',
        destination: 'https://www.academicjobs.com/australia/graduate',
        permanent: true,
      },
      {
        source: '/australia/phd',
        destination: 'https://www.academicjobs.com/australia/phd',
        permanent: true,
      },
      {
        source: '/asia/faculty',
        destination: 'https://www.academicjobs.com/asia/faculty',
        permanent: true,
      },
      {
        source: '/asia/graduate',
        destination: 'https://www.academicjobs.com/asia/graduate',
        permanent: true,
      },
      {
        source: '/asia/phd',
        destination: 'https://www.academicjobs.com/asia/phd',
        permanent: true,
      },
      {
        source: '/usa/faculty',
        destination: 'https://www.academicjobs.com/usa/faculty',
        permanent: true,
      },
      {
        source: '/usa/graduate',
        destination: 'https://www.academicjobs.com/usa/graduate',
        permanent: true,
      },
      {
        source: '/usa/phd',
        destination: 'https://www.academicjobs.com/usa/phd',
        permanent: true,
      },
      {
        source: '/canada/faculty',
        destination: 'https://www.academicjobs.com/canada/faculty',
        permanent: true,
      },
      {
        source: '/canada/graduate',
        destination: 'https://www.academicjobs.com/canada/graduate',
        permanent: true,
      },
      {
        source: '/canada/phd',
        destination: 'https://www.academicjobs.com/canada/phd',
        permanent: true,
      },
      {
        source: '/europe/faculty',
        destination: 'https://www.academicjobs.com/europe/faculty',
        permanent: true,
      },
      {
        source: '/europe/graduate',
        destination: 'https://www.academicjobs.com/europe/graduate',
        permanent: true,
      },
      {
        source: '/europe/phd',
        destination: 'https://www.academicjobs.com/europe/phd',
        permanent: true,
      },
      {
        source: '/india/faculty',
        destination: 'https://www.academicjobs.com/india/faculty',
        permanent: true,
      },
      {
        source: '/india/graduate',
        destination: 'https://www.academicjobs.com/india/graduate',
        permanent: true,
      },
      {
        source: '/india/phd',
        destination: 'https://www.academicjobs.com/india/phd',
        permanent: true,
      },
      {
        source: '/south-america/faculty',
        destination: 'https://www.academicjobs.com/south-america/faculty',
        permanent: true,
      },
      {
        source: '/south-america/graduate',
        destination: 'https://www.academicjobs.com/south-america/graduate',
        permanent: true,
      },
      {
        source: '/south-america/phd',
        destination: 'https://www.academicjobs.com/south-america/phd',
        permanent: true,
      },
      {
        source: '/middle-east/faculty',
        destination: 'https://www.academicjobs.com/middle-east/faculty',
        permanent: true,
      },
      {
        source: '/middle-east/graduate',
        destination: 'https://www.academicjobs.com/middle-east/graduate',
        permanent: true,
      },
      {
        source: '/middle-east/phd',
        destination: 'https://www.academicjobs.com/middle-east/phd',
        permanent: true,
      },
      {
        source: '/new-zealand/faculty',
        destination: 'https://www.academicjobs.com/new-zealand/faculty',
        permanent: true,
      },
      {
        source: '/new-zealand/graduate',
        destination: 'https://www.academicjobs.com/new-zealand/graduate',
        permanent: true,
      },
      {
        source: '/new-zealand/phd',
        destination: 'https://www.academicjobs.com/new-zealand/phd',
        permanent: true,
      },
      {
        source: '/uk/faculty',
        destination: 'https://www.academicjobs.com/uk/faculty',
        permanent: true,
      },
      {
        source: '/uk/graduate',
        destination: 'https://www.academicjobs.com/uk/graduate',
        permanent: true,
      },
      {
        source: '/uk/phd',
        destination: 'https://www.academicjobs.com/uk/phd',
        permanent: true,
      },
      {
        source: '/africa/recruitment/',
        destination: 'https://www.academicjobs.com/africa/recruitment/',
        permanent: true,
      },
      {
        source: '/africa/employer',
        destination: 'https://www.academicjobs.com/africa/employer',
        permanent: true,
      },
      {
        source: '/australia/recruitment',
        destination: 'https://www.academicjobs.com/australia/recruitment',
        permanent: true,
      },
      {
        source: '/australia/employer',
        destination: 'https://www.academicjobs.com/australia/employer',
        permanent: true,
      },
      {
        source: '/asia/recruitment',
        destination: 'https://www.academicjobs.com/asia/recruitment',
        permanent: true,
      },
      {
        source: '/asia/employer',
        destination: 'https://www.academicjobs.com/asia/employer',
        permanent: true,
      },
      {
        source: '/usa/recruitment',
        destination: 'https://www.academicjobs.com/usa/recruitment',
        permanent: true,
      },
      {
        source: '/usa/employer',
        destination: 'https://www.academicjobs.com/usa/employer',
        permanent: true,
      },
      {
        source: '/canada/recruitment',
        destination: 'https://www.academicjobs.com/canada/recruitment',
        permanent: true,
      },
      {
        source: '/canada/employer',
        destination: 'https://www.academicjobs.com/canada/employer',
        permanent: true,
      },
      {
        source: '/europe/recruitment',
        destination: 'https://www.academicjobs.com/europe/recruitment',
        permanent: true,
      },
      {
        source: '/europe/employer',
        destination: 'https://www.academicjobs.com/europe/employer',
        permanent: true,
      },
      {
        source: '/india/recruitment',
        destination: 'https://www.academicjobs.com/india/recruitment',
        permanent: true,
      },
      {
        source: '/india/employer',
        destination: 'https://www.academicjobs.com/india/employer',
        permanent: true,
      },
      {
        source: '/south-america/recruitment',
        destination: 'https://www.academicjobs.com/south-america/recruitment',
        permanent: true,
      },
      {
        source: '/south-america/employer',
        destination: 'https://www.academicjobs.com/south-america/employer',
        permanent: true,
      },
      {
        source: '/middle-east/recruitment',
        destination: 'https://www.academicjobs.com/middle-east/recruitment',
        permanent: true,
      },
      {
        source: '/middle-east/employer',
        destination: 'https://www.academicjobs.com/middle-east/employer',
        permanent: true,
      },
      {
        source: '/new-zealand/recruitment',
        destination: 'https://www.academicjobs.com/new-zealand/recruitment',
        permanent: true,
      },
      {
        source: '/new-zealand/employer',
        destination: 'https://www.academicjobs.com/new-zealand/employer',
        permanent: true,
      },
      {
        source: '/uk/recruitment',
        destination: 'https://www.academicjobs.com/uk/recruitment',
        permanent: true,
      },
      {
        source: '/uk/employer',
        destination: 'https://www.academicjobs.com/uk/employer',
        permanent: true,
      },
      {
        source: '/ai-recruitment/',
        destination: 'https://www.academicjobs.com/ai-recruitment/',
        permanent: true,
      },
      // {
      //   source: '/tasmania',
      //   destination: 'https://www.academicjobs.com/tasmania',
      //   permanent: true,
      // },
      {
        source: '/hobart',
        destination: 'https://www.academicjobs.com/hobart',
        permanent: true,
      },
      {
        source: '/architecture-network',
        destination: 'https://www.academicjobs.com/architecture-network',
        permanent: true,
      },
      {
        source: '/top-10-australian-universities',
        destination:
          'https://www.academicjobs.com/top-10-australian-universities',
        permanent: true,
      },
      {
        source: '/jobelephant-recruitment',
        destination: 'https://www.academicjobs.com/jobelephant-recruitment',
        permanent: true,
      },
      // {
      // source: '/australia/post-a-job',
      // destination: 'https://www.academicjobs.com/australia/post-a-job',
      // permanent: true,
      // },
      // {
      // source: '/jobelephant',
      // destination: 'https://www.academicjobs.com/jobelephant',
      // permanent: true,
      // },
      // {
      // source: '/jobelephant/post-job',
      // destination: 'https://www.academicjobs.com/jobelephant/post-job',
      // permanent: true,
      // },
      // {
      // source: '/post-a-job',
      // destination: 'https://www.academicjobs.com/post-a-job',
      // permanent: true,
      // },
      {
        source: '/industry',
        destination: 'https://www.academicjobs.com/industry',
        permanent: true,
      },
      {
        source: '/industry/info',
        destination: 'https://www.academicjobs.com/industry/info',
        permanent: true,
      },
      {
        source: '/the-academic-rankings/find-my-rank ',
        destination:
          'https://www.academicjobs.com/the-academic-rankings/find-my-rank ',
        permanent: true,
      },
      {
        source: '/the-academic-rankings/my-academic-rank',
        destination:
          'https://www.academicjobs.com/the-academic-rankings/my-academic-rank',
        permanent: true,
      },
      {
        source: '/career-help/start-your-career-at-harvard-university',
        destination:
          'https://www.academicjobs.com/career-help/start-your-career-at-harvard-university',
        permanent: true,
      },
      {
        source:
          '/career-help/how-to-land-your-dream-college-job-a-step-by-step-guide',
        destination:
          'https://www.academicjobs.com/career-help/how-to-land-your-dream-college-job-a-step-by-step-guide',
        permanent: true,
      },
      {
        source: '/career-help/seek-all-bond-university-jobs-here',
        destination:
          'https://www.academicjobs.com/career-help/seek-all-bond-university-jobs-here',
        permanent: true,
      },
      {
        source: '/career-help/qut-university-academic-careers',
        destination:
          'https://www.academicjobs.com/career-help/qut-university-academic-careers',
        permanent: true,
      },
      {
        source:
          '/career-help/happiness-and-academics-scott-galloways-algebra-of-happiness',
        destination:
          'https://www.academicjobs.com/career-help/happiness-and-academics-scott-galloways-algebra-of-happiness',
        permanent: true,
      },
      {
        source: '/career-help/seek-all-harvard-university-jobs-here',
        destination:
          'https://www.academicjobs.com/career-help/seek-all-harvard-university-jobs-here',
        permanent: true,
      },
      {
        source:
          '/career-help/exploring-the-benefits-of-academic-jobs-online-why-virtual-hiring-is-on-the-rise',
        destination:
          'https://www.academicjobs.com/career-help/exploring-the-benefits-of-academic-jobs-online-why-virtual-hiring-is-on-the-rise',
        permanent: true,
      },
      {
        source:
          '/career-help/exploring-global-landscape-academic-jobs-opportunities-challenges',
        destination:
          'https://www.academicjobs.com/career-help/exploring-global-landscape-academic-jobs-opportunities-challenges',
        permanent: true,
      },
      {
        source:
          '/career-help/choosing-the-best-university-in-australia-for-2023',
        destination:
          'https://www.academicjobs.com/career-help/choosing-the-best-university-in-australia-for-2023',
        permanent: true,
      },
      {
        source: '/career-help/evolution-of-university-recruitment',
        destination:
          'https://www.academicjobs.com/career-help/evolution-of-university-recruitment',
        permanent: true,
      },
      {
        source: '/career-help/the-highest-paid-academic-job-of-2023',
        destination:
          'https://www.academicjobs.com/career-help/the-highest-paid-academic-job-of-2023',
        permanent: true,
      },
      {
        source: '/career-help/chief-research-officer-academic-leadership-2023',
        destination:
          'https://www.academicjobs.com/career-help/chief-research-officer-academic-leadership-2023',
        permanent: true,
      },
      {
        source: '/career-help/unlocking-benefits-on-campus-student-jobs',
        destination:
          'https://www.academicjobs.com/career-help/unlocking-benefits-on-campus-student-jobs',
        permanent: true,
      },
      {
        source: '/career-help/find-all-qut-university-jobs-here',
        destination:
          'https://www.academicjobs.com/career-help/find-all-qut-university-jobs-here',
        permanent: true,
      },
      {
        source: '/career-help/find-all-bond-university-careers-here',
        destination:
          'https://www.academicjobs.com/career-help/find-all-bond-university-careers-here',
        permanent: true,
      },
      {
        source: '/career-help/seek-all-ucla-jobs-here',
        destination:
          'https://www.academicjobs.com/career-help/seek-all-ucla-jobs-here',
        permanent: true,
      },
      {
        source: '/career-help/start-your-career-at-ucla',
        destination:
          'https://www.academicjobs.com/career-help/start-your-career-at-ucla',
        permanent: true,
      },
      {
        source: '/employers/contra-costa-college/13611',
        destination:
          'https://www.academicjobs.com/employers/contra-costa-college/13611',
        permanent: true,
      },
      {
        source: '/employers/academic-jobs-in-applied-science/13603',
        destination:
          'https://www.academicjobs.com/employers/academic-jobs-in-applied-science/13603',
        permanent: true,
      },
      {
        source: '/employers/academic-jobs-in-chemistry/13605',
        destination:
          'https://www.academicjobs.com/employers/academic-jobs-in-chemistry/13605',
        permanent: true,
      },
      {
        source: '/employers/academic-jobs-in-biomedicine/13604',
        destination:
          'https://www.academicjobs.com/employers/academic-jobs-in-biomedicine/13604',
        permanent: true,
      },
      {
        source: '/employers/academic-jobs-in-clinical-science/13606/',
        destination:
          'https://www.academicjobs.com/employers/academic-jobs-in-clinical-science/13606/',
        permanent: true,
      },
      {
        source: '/employers/academic-job-in-computing/13607',
        destination:
          'https://www.academicjobs.com/employers/academic-job-in-computing/13607',
        permanent: true,
      },
      {
        source: '/employers/academic-jobs-in-earth-science/13608',
        destination:
          'https://www.academicjobs.com/employers/academic-jobs-in-earth-science/13608',
        permanent: true,
      },
      {
        source: '/employers/academic-jobs-in-engineering/13609 ',
        destination:
          'https://www.academicjobs.com/employers/academic-jobs-in-engineering/13609 ',
        permanent: true,
      },
      {
        source: '/employers/academic-jobs-in-environmental-science/13610',
        destination:
          'https://www.academicjobs.com/employers/academic-jobs-in-environmental-science/13610',
        permanent: true,
      },
      {
        source: '/employers/academic-jobs-in-health-science/13612',
        destination:
          'https://www.academicjobs.com/employers/academic-jobs-in-health-science/13612',
        permanent: true,
      },
      {
        source: '/employers/academic-jobs-in-life-science/13613',
        destination:
          'https://www.academicjobs.com/employers/academic-jobs-in-life-science/13613',
        permanent: true,
      },
      {
        source: '/employers/academic-jobs-in-mathematics/13614',
        destination:
          'https://www.academicjobs.com/employers/academic-jobs-in-mathematics/13614',
        permanent: true,
      },
      {
        source: '/employers/academic-jobs-in-physics/13615',
        destination:
          'https://www.academicjobs.com/employers/academic-jobs-in-physics/13615',
        permanent: true,
      },
      // {
      //   source: '/quick-job-post-technology',
      //   destination: 'https://www.academicjobs.com/quick-job-post-technology',
      //   permanent: true,
      // },
      {
        source: '/career-help/higher-ed-quick-job-post-technology',
        destination:
          'https://www.academicjobs.com/career-help/higher-ed-quick-job-post-technology',
        permanent: true,
      },
      {
        source: '/city',
        destination: 'https://www.academicjobs.com/city',
        permanent: true,
      },
      {
        source: '/city/boston-academic-excellence-nobel-achievements',
        destination:
          'https://www.academicjobs.com/city/boston-academic-excellence-nobel-achievements',
        permanent: true,
      },
      {
        source: '/city/london-higher-education-intellectual-prowess',
        destination:
          'https://www.academicjobs.com/city/london-higher-education-intellectual-prowess',
        permanent: true,
      },
      {
        source: '/city/melbourne-higher-education-research',
        destination:
          'https://www.academicjobs.com/city/melbourne-higher-education-research',
        permanent: true,
      },
      {
        source: '/city/los-angeles-academic-diversity-innovation',
        destination:
          'https://www.academicjobs.com/city/los-angeles-academic-diversity-innovation',
        permanent: true,
      },
      {
        source: '/city/brisbane-academic-excellence-innovation',
        destination:
          'https://www.academicjobs.com/city/brisbane-academic-excellence-innovation',
        permanent: true,
      },
      {
        source: '/city/canberra-academic-rigour-research-excellence',
        destination:
          'https://www.academicjobs.com/city/canberra-academic-rigour-research-excellence',
        permanent: true,
      },
      {
        source: '/city/wollongong-academic-innovation-diversity',
        destination:
          'https://www.academicjobs.com/city/wollongong-academic-innovation-diversity',
        permanent: true,
      },
      {
        source: '/city/sydney-higher-education-research',
        destination:
          'https://www.academicjobs.com/city/sydney-higher-education-research',
        permanent: true,
      },
      {
        source: '/city/paris-global-higher-education-research',
        destination:
          'https://www.academicjobs.com/city/paris-global-higher-education-research',
        permanent: true,
      },
      {
        source: '/city/academic-excellence-new-york-city',
        destination:
          'https://www.academicjobs.com/city/academic-excellence-new-york-city',
        permanent: true,
      },
      {
        source: '/city/berlin-higher-education-intellectual-discovery',
        destination:
          'https://www.academicjobs.com/city/berlin-higher-education-intellectual-discovery',
        permanent: true,
      },
      {
        source: '/city/tokyo-higher-education-research',
        destination:
          'https://www.academicjobs.com/city/tokyo-higher-education-research',
        permanent: true,
      },
      {
        source: '/city/toronto-higher-education-research',
        destination:
          'https://www.academicjobs.com/city/toronto-higher-education-research',
        permanent: true,
      },
      {
        source: '/city/perth-higher-education-innovation',
        destination:
          'https://www.academicjobs.com/city/perth-higher-education-innovation',
        permanent: true,
      },
      {
        source: '/city/adelaide-academic-excellence-research',
        destination:
          'https://www.academicjobs.com/city/adelaide-academic-excellence-research',
        permanent: true,
      },
      {
        source: '/city/chicago-academic-research-hub',
        destination:
          'https://www.academicjobs.com/city/chicago-academic-research-hub',
        permanent: true,
      },
      {
        source: '/city/san-francisco-education-innovation',
        destination:
          'https://www.academicjobs.com/city/san-francisco-education-innovation',
        permanent: true,
      },
      {
        source: '/city/montreal-higher-education-cultural-diversity',
        destination:
          'https://www.academicjobs.com/city/montreal-higher-education-cultural-diversity',
        permanent: true,
      },
      {
        source: '/city/zurich-academic-achievement-research',
        destination:
          'https://www.academicjobs.com/city/zurich-academic-achievement-research',
        permanent: true,
      },
      {
        source: '/city/singapore-higher-education-innovation',
        destination:
          'https://www.academicjobs.com/city/singapore-higher-education-innovation',
        permanent: true,
      },
      {
        source: '/city/amsterdam-academic-excellence-innovation',
        destination:
          'https://www.academicjobs.com/city/amsterdam-academic-excellence-innovation',
        permanent: true,
      },
      {
        source: '/city/oxford-academic-heritage',
        destination:
          'https://www.academicjobs.com/city/oxford-academic-heritage',
        permanent: true,
      },
      {
        source: '/city/cambridge-academic-prestige-innovation',
        destination:
          'https://www.academicjobs.com/city/cambridge-academic-prestige-innovation',
        permanent: true,
      },
      {
        source: '/city/hong-kong-academic-traditions',
        destination:
          'https://www.academicjobs.com/city/hong-kong-academic-traditions',
        permanent: true,
      },
      {
        source: '/city/seoul-innovation-academic-excellence',
        destination:
          'https://www.academicjobs.com/city/seoul-innovation-academic-excellence',
        permanent: true,
      },
      {
        source: '/city/munich-higher-education-research',
        destination:
          'https://www.academicjobs.com/city/munich-higher-education-research',
        permanent: true,
      },
      {
        source: '/city/vancouver-academic-excellence',
        destination:
          'https://www.academicjobs.com/city/vancouver-academic-excellence',
        permanent: true,
      },
      {
        source: '/city/edinburgh-academic-heritage',
        destination:
          'https://www.academicjobs.com/city/edinburgh-academic-heritage',
        permanent: true,
      },
      {
        source: '/city/academic-landscape-beijing',
        destination:
          'https://www.academicjobs.com/city/academic-landscape-beijing',
        permanent: true,
      },
      {
        source: '/city/academic-excellence-shanghai',
        destination:
          'https://www.academicjobs.com/city/academic-excellence-shanghai',
        permanent: true,
      },
      {
        source: '/city/educational-landscape-stockholm',
        destination:
          'https://www.academicjobs.com/city/educational-landscape-stockholm',
        permanent: true,
      },
      {
        source: '/city/academic-landscape-copenhagen',
        destination:
          'https://www.academicjobs.com/city/academic-landscape-copenhagen',
        permanent: true,
      },
      {
        source: '/city/academic-dublin',
        destination: 'https://www.academicjobs.com/city/academic-dublin',
        permanent: true,
      },
      {
        source: '/city/academic-austin',
        destination: 'https://www.academicjobs.com/city/academic-austin',
        permanent: true,
      },
      {
        source: '/city/academic-madrid',
        destination: 'https://www.academicjobs.com/city/academic-madrid',
        permanent: true,
      },
      {
        source: '/city/academic-barcelona',
        destination: 'https://www.academicjobs.com/city/academic-barcelona',
        permanent: true,
      },
      {
        source: '/city/academic-buenos-aires',
        destination: 'https://www.academicjobs.com/city/academic-buenos-aires',
        permanent: true,
      },
      {
        source: '/city/educational-kuala-lumpur',
        destination:
          'https://www.academicjobs.com/city/educational-kuala-lumpur',
        permanent: true,
      },
      {
        source: '/city/educational-vienna',
        destination: 'https://www.academicjobs.com/city/educational-vienna',
        permanent: true,
      },
      {
        source: '/city/academic-brussels',
        destination: 'https://www.academicjobs.com/city/academic-brussels',
        permanent: true,
      },
      {
        source: '/city/academic-taipei',
        destination: 'https://www.academicjobs.com/city/academic-taipei',
        permanent: true,
      },
      {
        source: '/city/universities-colleges-milan',
        destination:
          'https://www.academicjobs.com/city/universities-colleges-milan',
        permanent: true,
      },
      {
        source: '/city/universities-colleges-helsinki',
        destination:
          'https://www.academicjobs.com/city/universities-colleges-helsinki',
        permanent: true,
      },
      {
        source: '/city/universities-colleges-bangalore',
        destination:
          'https://www.academicjobs.com/city/universities-colleges-bangalore',
        permanent: true,
      },
      {
        source: '/city/universities-colleges-sao-paulo',
        destination:
          'https://www.academicjobs.com/city/universities-colleges-sao-paulo',
        permanent: true,
      },
      {
        source: '/city/universities-colleges-mexico-city',
        destination:
          'https://www.academicjobs.com/city/universities-colleges-mexico-city',
        permanent: true,
      },
      {
        source: '/city/universities-colleges-istanbul',
        destination:
          'https://www.academicjobs.com/city/universities-colleges-istanbul',
        permanent: true,
      },
      {
        source: '/city/universities-colleges-riyadh',
        destination:
          'https://www.academicjobs.com/city/universities-colleges-riyadh',
        permanent: true,
      },
      {
        source: '/city/universities-colleges-johannesburg',
        destination:
          'https://www.academicjobs.com/city/universities-colleges-johannesburg',
        permanent: true,
      },
      {
        source: '/city/universities-colleges-cairo',
        destination:
          'https://www.academicjobs.com/city/universities-colleges-cairo',
        permanent: true,
      },
      {
        source: '/city/universities-colleges-santiago',
        destination:
          'https://www.academicjobs.com/city/universities-colleges-santiago',
        permanent: true,
      },
      {
        source: '/city/universities-colleges-lisbon',
        destination:
          'https://www.academicjobs.com/city/universities-colleges-lisbon',
        permanent: true,
      },
      {
        source: '/city/universities-colleges-bangkok',
        destination:
          'https://www.academicjobs.com/city/universities-colleges-bangkok',
        permanent: true,
      },
      {
        source: '/city/universities-colleges-new-delhi',
        destination:
          'https://www.academicjobs.com/city/universities-colleges-new-delhi',
        permanent: true,
      },
      {
        source: '/city/montgomery-alabama',
        destination: 'https://www.academicjobs.com/city/montgomery-alabama',
        permanent: true,
      },
      {
        source: '/city/juneau-usa-higher-education',
        destination:
          'https://www.academicjobs.com/city/juneau-usa-higher-education',
        permanent: true,
      },
      {
        source: '/city/phoenix-arizona-education',
        destination:
          'https://www.academicjobs.com/city/phoenix-arizona-education',
        permanent: true,
      },
      {
        source: '/city/exploring-little-rock-universities-laureates-academia',
        destination:
          'https://www.academicjobs.com/city/exploring-little-rock-universities-laureates-academia',
        permanent: true,
      },
      {
        source: '/city/denver-colorado-education-intellectual-hub',
        destination:
          'https://www.academicjobs.com/city/denver-colorado-education-intellectual-hub',
        permanent: true,
      },
      {
        source: '/city/hartford-usa-education-hub',
        destination:
          'https://www.academicjobs.com/city/hartford-usa-education-hub',
        permanent: true,
      },
      {
        source: '/city/dover-delaware-education-hub',
        destination:
          'https://www.academicjobs.com/city/dover-delaware-education-hub',
        permanent: true,
      },
      {
        source: '/city/tallahassee-academic-excellence',
        destination:
          'https://www.academicjobs.com/city/tallahassee-academic-excellence',
        permanent: true,
      },
      {
        source: '/city/atlanta-georgia-thriving-academic-hub',
        destination:
          'https://www.academicjobs.com/city/atlanta-georgia-thriving-academic-hub',
        permanent: true,
      },
      {
        source: '/city/exploring-boise-idaho-education',
        destination:
          'https://www.academicjobs.com/city/exploring-boise-idaho-education',
        permanent: true,
      },
      {
        source: '/city/indianapolis-learning-innovation-hub',
        destination:
          'https://www.academicjobs.com/city/indianapolis-learning-innovation-hub',
        permanent: true,
      },
      {
        source: '/city/exploring-des-moines-higher-education',
        destination:
          'https://www.academicjobs.com/city/exploring-des-moines-higher-education',
        permanent: true,
      },
      {
        source: '/city/exploring-topeka-kansas-academic-excellence',
        destination:
          'https://www.academicjobs.com/city/exploring-topeka-kansas-academic-excellence',
        permanent: true,
      },
      {
        source: '/city/gold-coast-australia-education-hub',
        destination:
          'https://www.academicjobs.com/city/gold-coast-australia-education-hub',
        permanent: true,
      },
      {
        source: '/city/wagga-wagga-australia-education-hub',
        destination:
          'https://www.academicjobs.com/city/wagga-wagga-australia-education-hub',
        permanent: true,
      },
      {
        source: '/city/exploring-bathurst-australia-education-innovation',
        destination:
          'https://www.academicjobs.com/city/exploring-bathurst-australia-education-innovation',
        permanent: true,
      },
      {
        source: '/city/ballarat-academic-excellence',
        destination:
          'https://www.academicjobs.com/city/ballarat-academic-excellence',
        permanent: true,
      },
      {
        source: '/city/bendigo-academic-excellence',
        destination:
          'https://www.academicjobs.com/city/bendigo-academic-excellence',
        permanent: true,
      },
      {
        source: '/city/unveiling-wodonga-academic-excellence',
        destination:
          'https://www.academicjobs.com/city/unveiling-wodonga-academic-excellence',
        permanent: true,
      },
      {
        source: '/city/exploring-dubbo-australias-academic-landscape',
        destination:
          'https://www.academicjobs.com/city/exploring-dubbo-australias-academic-landscape',
        permanent: true,
      },
      {
        source: '/city/exploring-goulburn-academic-landscape',
        destination:
          'https://www.academicjobs.com/city/exploring-goulburn-academic-landscape',
        permanent: true,
      },
      {
        source: '/city/orange-australia-education-and-innovation-hub',
        destination:
          'https://www.academicjobs.com/city/orange-australia-education-and-innovation-hub',
        permanent: true,
      },
      {
        source: '/city/higher-education-port-macquarie',
        destination:
          'https://www.academicjobs.com/city/higher-education-port-macquarie',
        permanent: true,
      },
      {
        source: '/city/bundaberg-australia-education',
        destination:
          'https://www.academicjobs.com/city/bundaberg-australia-education',
        permanent: true,
      },
      {
        source: '/city/exploring-gladstones-academic-excellence',
        destination:
          'https://www.academicjobs.com/city/exploring-gladstones-academic-excellence',
        permanent: true,
      },
      {
        source: '/city/exploring-mackay-australia-education-and-innovation-hub',
        destination:
          'https://www.academicjobs.com/city/exploring-mackay-australia-education-and-innovation-hub',
        permanent: true,
      },
      {
        source: '/city/rockhampton-australia-academic-excellence',
        destination:
          'https://www.academicjobs.com/city/rockhampton-australia-academic-excellence',
        permanent: true,
      },
      {
        source: '/city/ararat-australia-education',
        destination:
          'https://www.academicjobs.com/city/ararat-australia-education',
        permanent: true,
      },
      {
        source: '/city/horsham-australia-educational-diversity',
        destination:
          'https://www.academicjobs.com/city/horsham-australia-educational-diversity',
        permanent: true,
      },
      {
        source: '/city/exploring-stawell-australia-academic-excellence',
        destination:
          'https://www.academicjobs.com/city/exploring-stawell-australia-academic-excellence',
        permanent: true,
      },
      {
        source: '/city/churchill-australia-academic-excellence',
        destination:
          'https://www.academicjobs.com/city/churchill-australia-academic-excellence',
        permanent: true,
      },
      {
        source: '/city/coffs-harbour-academic-excellence',
        destination:
          'https://www.academicjobs.com/city/coffs-harbour-academic-excellence',
        permanent: true,
      },
      {
        source: '/city/lismore-australia-academic-excellence',
        destination:
          'https://www.academicjobs.com/city/lismore-australia-academic-excellence',
        permanent: true,
      },
      {
        source: '/city/tweed-heads-australia-education-innovation',
        destination:
          'https://www.academicjobs.com/city/tweed-heads-australia-education-innovation',
        permanent: true,
      },
      {
        source: '/city/armidale-australia-academic-excellence',
        destination:
          'https://www.academicjobs.com/city/armidale-australia-academic-excellence',
        permanent: true,
      },
      {
        source: '/city/toowoomba-australia-hub-of-learning',
        destination:
          'https://www.academicjobs.com/city/toowoomba-australia-hub-of-learning',
        permanent: true,
      },
      {
        source: '/city/springfield-australia-academic-excellence',
        destination:
          'https://www.academicjobs.com/city/springfield-australia-academic-excellence',
        permanent: true,
      },
      {
        source: '/city/higher-education-hub-ipswich-australia',
        destination:
          'https://www.academicjobs.com/city/higher-education-hub-ipswich-australia',
        permanent: true,
      },
      {
        source: '/city/frankston-australia-education-hub',
        destination:
          'https://www.academicjobs.com/city/frankston-australia-education-hub',
        permanent: true,
      },
      {
        source: '/city/exploring-fremantle-australias-academic-landscape',
        destination:
          'https://www.academicjobs.com/city/exploring-fremantle-australias-academic-landscape',
        permanent: true,
      },
      {
        source: '/city/gippsland-australia-education',
        destination:
          'https://www.academicjobs.com/city/gippsland-australia-education',
        permanent: true,
      },
      {
        source: '/city/emerald-australia-academics',
        destination:
          'https://www.academicjobs.com/city/emerald-australia-academics',
        permanent: true,
      },
      {
        source: '/city/discover-noosa-academic-excellence-and-natural-beauty',
        destination:
          'https://www.academicjobs.com/city/discover-noosa-academic-excellence-and-natural-beauty',
        permanent: true,
      },
      {
        source: '/city/townsville-australia-education-innovation',
        destination:
          'https://www.academicjobs.com/city/townsville-australia-education-innovation',
        permanent: true,
      },
      {
        source: '/city/unlocking-cairns-australias-academic-gem',
        destination:
          'https://www.academicjobs.com/city/unlocking-cairns-australias-academic-gem',
        permanent: true,
      },
      {
        source: '/city/sunshine-coast-education-hub',
        destination:
          'https://www.academicjobs.com/city/sunshine-coast-education-hub',
        permanent: true,
      },
      {
        source: '/city/shepparton-australia-education',
        destination:
          'https://www.academicjobs.com/city/shepparton-australia-education',
        permanent: true,
      },
      {
        source: '/city/exploring-academic-excellence-mildura-australia',
        destination:
          'https://www.academicjobs.com/city/exploring-academic-excellence-mildura-australia',
        permanent: true,
      },
      {
        source: '/city/geelong-australia-educational-hub',
        destination:
          'https://www.academicjobs.com/city/geelong-australia-educational-hub',
        permanent: true,
      },
      {
        source: '/city/launceston-australia-educational-excellence',
        destination:
          'https://www.academicjobs.com/city/launceston-australia-educational-excellence',
        permanent: true,
      },
      {
        source: '/city/exploring-burnie-academic-landscape-tasmania-australia',
        destination:
          'https://www.academicjobs.com/city/exploring-burnie-academic-landscape-tasmania-australia',
        permanent: true,
      },
      {
        source: '/city/wollongong-australia-academic-oasis',
        destination:
          'https://www.academicjobs.com/city/wollongong-australia-academic-oasis',
        permanent: true,
      },
      {
        source:
          '/city/discover-darwin-universities-notable-figures-opportunities',
        destination:
          'https://www.academicjobs.com/city/discover-darwin-universities-notable-figures-opportunities',
        permanent: true,
      },
      {
        source: '/city/exploring-hobarts-education-innovation-hub',
        destination:
          'https://www.academicjobs.com/city/exploring-hobarts-education-innovation-hub',
        permanent: true,
      },
      {
        source: '/city/montgomery-alabama-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/montgomery-alabama-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/juneau-alaska-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/juneau-alaska-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/phoenix-arizona-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/phoenix-arizona-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/little-rock-arkansas-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/little-rock-arkansas-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/denver-colorado-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/denver-colorado-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/hartford-connecticut-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/hartford-connecticut-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/dover-delaware-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/dover-delaware-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/tallahassee-florida-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/tallahassee-florida-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/atlanta-georgia-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/atlanta-georgia-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/boise-idaho-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/boise-idaho-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/indianapolis-indiana-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/indianapolis-indiana-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/des-moines-iowa-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/des-moines-iowa-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/topeka-kansas-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/topeka-kansas-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/frankfort-kentucky-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/frankfort-kentucky-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/baton-rouge-louisiana-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/baton-rouge-louisiana-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/augusta-maine-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/augusta-maine-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/annapolis-maryland-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/annapolis-maryland-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/lansing-michigan-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/lansing-michigan-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/saint-paul-minnesota-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/saint-paul-minnesota-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/jackson-mississippi-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/jackson-mississippi-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/jefferson-city-missouri-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/jefferson-city-missouri-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/helena-montana-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/helena-montana-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/lincoln-nebraska-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/lincoln-nebraska-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/carson-city-nevada-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/carson-city-nevada-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/concord-new-hampshire-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/concord-new-hampshire-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/trenton-new-jersey-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/trenton-new-jersey-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/santa-fe-new-mexico-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/santa-fe-new-mexico-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/raleigh-north-carolina-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/raleigh-north-carolina-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/bismarck-north-dakota-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/bismarck-north-dakota-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/columbus-ohio-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/columbus-ohio-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/oklahoma-city-oklahoma-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/oklahoma-city-oklahoma-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/salem-oregon-universities-colleges',
        destination:
          'https://www.academicjobs.com/city/salem-oregon-universities-colleges',
        permanent: true,
      },
      {
        source: '/city/universities-harrisburg-pennsylvania',
        destination:
          'https://www.academicjobs.com/city/universities-harrisburg-pennsylvania',
        permanent: true,
      },
      {
        source: '/city/universities-providence-rhode-island',
        destination:
          'https://www.academicjobs.com/city/universities-providence-rhode-island',
        permanent: true,
      },
      {
        source: '/city/universities-columbia-south-carolina',
        destination:
          'https://www.academicjobs.com/city/universities-columbia-south-carolina',
        permanent: true,
      },
      {
        source: '/city/universities-pierre-south-dakota',
        destination:
          'https://www.academicjobs.com/city/universities-pierre-south-dakota',
        permanent: true,
      },
      {
        source: '/city/universities-nashville-tennessee',
        destination:
          'https://www.academicjobs.com/city/universities-nashville-tennessee',
        permanent: true,
      },
      {
        source: '/city/universities-salt-lake-city-utah',
        destination:
          'https://www.academicjobs.com/city/universities-salt-lake-city-utah',
        permanent: true,
      },
      {
        source: '/city/higher-education-montpelier-vermont',
        destination:
          'https://www.academicjobs.com/city/higher-education-montpelier-vermont',
        permanent: true,
      },
      {
        source: '/city/education-richmond-virginia',
        destination:
          'https://www.academicjobs.com/city/education-richmond-virginia',
        permanent: true,
      },
      {
        source: '/city/education-olympia-washington',
        destination:
          'https://www.academicjobs.com/city/education-olympia-washington',
        permanent: true,
      },
      {
        source: '/city/charleston-west-virginia-higher-education',
        destination:
          'https://www.academicjobs.com/city/charleston-west-virginia-higher-education',
        permanent: true,
      },
      {
        source: '/city/madison-wisconsin-academic-hub',
        destination:
          'https://www.academicjobs.com/city/madison-wisconsin-academic-hub',
        permanent: true,
      },
      {
        source: '/city/cheyenne-wyoming-academic-opportunities',
        destination:
          'https://www.academicjobs.com/city/cheyenne-wyoming-academic-opportunities',
        permanent: true,
      },
      {
        source: '/city/honolulu-hawaii-academic-excellence',
        destination:
          'https://www.academicjobs.com/city/honolulu-hawaii-academic-excellence',
        permanent: true,
      },
      {
        source: '/city/springfield-usa-education-hub',
        destination:
          'https://www.academicjobs.com/city/springfield-usa-education-hub',
        permanent: true,
      },
      {
        source: '/city/sacramento-usa-education-hub',
        destination:
          'https://www.academicjobs.com/city/sacramento-usa-education-hub',
        permanent: true,
      },
      {
        source: '/cities/:slug*',
        destination: 'https://www.academicjobs.com/cities/:slug*',
        permanent: true,
      },
      {
        source: '/company/:slug*',
        destination: 'https://www.academicjobs.com/employers',
        permanent: true,
      },
      // {
      //   source: '/jobs?q=business%20and%20economics&l=',
      //   destination: 'https://www.academicjobs.com/jobs',
      //   permanent: true,
      // },
      {
        source: '/job-type',
        destination: 'https://www.academicjobs.com/jobs',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
