<SearchResults1
q={{ filter1: [{ category: 'City', filter: 'Boston' },{....} ], q: '', l: '' }}
/>
Category:
activation_date,
expiration_date,
createdAt,
id,
employer_id,
description,
title,
location,
how_to_apply,
currency,
master_category_job_type,
subcategory_academic_jobs,
subcategory_executive_jobs,
subcategory_administration_support,
subcategory_hr_jobs,
subcategory_faculty_department,
subcategory_industry_jobs,
subcategory,
featured,
salary_from,
salary_to,
salary_period,
job_type,
position_type,
remote,
region,
country,
state,
postedBy,
jobPostDuration,
city,
company_name1,
categories,
internalonly,
headlineOnly,
activeYN,
firstName1,
lastName1,
email1,
phone1,
jobTitle1,
firstName2,
lastName2,
email2,
phone2,
jobTitle2,
subcategoryOthers,
replace to=" to href="
replace img to <Image
replace class to className
Three ways to make a dynamic page -- like lecture page :
1. no customization: no own page ==> use template
   <Link href="/find-jobs?q=lecturer">Lecturer</Link>
2. semi customization: no own page ===> use template,
   data= [{
   "Name": "lecturer",
   "Content": "this is content specially for lecturer"
   },
   ]
import data
const { content } = data.find(item => item.Name === urlparamter);
<Link href="/find-jobs?q=urlparamter">Lecturer</Link>
3. full customization: create own page
<JobSearchBox q="lecturer" />
<SearchResults q={{ q: 'lecturer' || 0 }} />
<Link href="/lecturer">Lecturer</Link>
