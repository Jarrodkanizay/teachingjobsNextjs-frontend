const positionData = [
  {
    Name: 'graduate teacher',
    Title: 'Graduate School Jobs',
    Description:
      'If you are interested in becoming a graduate teacher, browse our job board for the latest vacancies in your area. You can also find more information about the requirements, qualifications and pathways for graduate teaching on our website.',
    Keyword: 'Graduate Teacher Jobs, Teaching Graduate Jobs',
    content:
      'As a graduate teacher, you will have the opportunity to join a rewarding and dynamic profession that offers flexible work hours, competitive salary and benefits, and ongoing professional development. You will also receive support and guidance from experienced mentors, colleagues and school leaders to help you grow and succeed as a teacher.',
  },
  {
    Name: 'library services',
    Title: 'Library Service School Jobs',
    Description:
      'If you are interested in becoming a school library professional, browse our job board for the latest vacancies in your area. You can also find more examples of great library services on our website.  ',
    Keyword: 'Library Service Jobs. Library Service positions',
    content:
      'Library Services Jobs include teacher librarians, library technicians, library assistants and other staff who are involved in the operation and management of the school library. They play a vital role in promoting literacy, inquiry, creativity and critical thinking among students and teachers. They also contribute to the development of a positive school culture and a lifelong love of learning.',
  },
  {
    Name: 'information management',
    Title: 'Information Management School Jobs',
    Description:
      'Do you have the skills and knowledge to design, implement and evaluate information systems and services that support learning and teaching? If so, you might be interested in becoming an information management professional.',
    Keyword: 'Information Management Jobs. Information Management positions',
    content:
      'Information management professionals are those who work in the field of information management, which is an emerging discipline that is concerned with the infrastructure, principles, contexts and purposes of information. They apply their expertise in information science, technology, management and education to help schools and other educational institutions achieve their goals and objectives.',
  },
  {
    Name: 'schools management',
    Title: 'Management School Jobs',
    Description:
      'Educational Information Management Professionals are experts in the emerging discipline of information management, focused on information infrastructure, principles, contexts, and purposes. They leverage their knowledge in information science, technology, management, and education to support schools and educational institutions in achieving their objectives. ',
    Keyword: 'School Management Jobs. School Management positions',
    content:
      "School Information Management Professionals are experts in the field of information management, dedicated to enhancing educational institutions' effectiveness by optimizing information infrastructure, principles, contexts, and purposes. Leveraging their knowledge in information science, technology, management, and education, they play a pivotal role in assisting schools to achieve their goals and objectives. This role involves streamlining data systems, ensuring information security, and employing data-driven strategies to support educational excellence.",
  },
  {
    Name: 'vocational management',
    Title: 'Management Vocational School Jobs',
    Description:
      'Vocational Education Managers are pivotal in the realm of vocational training. These professionals play a vital role in shaping the infrastructure, principles, contexts, and goals of vocational education programs. They apply their expertise in education, management, and vocational training to guide schools and educational institutions in achieving their vocational training objectives.',
    Keyword: 'Management - Vocational Jobs. Management - Vocational positions',
    content:
      'Vocational Education Management Professionals are skilled individuals specializing in vocational education. They play a crucial role in overseeing the infrastructure, principles, contexts, and purposes of vocational training programs. These professionals leverage their expertise in education, management, and vocational fields to support schools and educational institutions in achieving their vocational training goals and objectives.',
  },
  {
    Name: 'principal',
    Title: 'Principal Jobs',
    Description:
      'We are seeking an experienced and visionary educational leader to serve as a Principal. The Principal plays a pivotal role in providing effective leadership, fostering a positive learning environment, and ensuring the achievement of educational goals and objectives.',
    Keyword: 'Principal Jobs. Principal positions',
    content:
      'Find principal vacancies on Teaching Jobs, government websites, and through recruitment agencies specializing in educational leadership roles. For those aspiring to become principals, Australia offers a dynamic and rewarding environment to lead schools towards a bright and innovative future in education.',
  },
  {
    Name: 'student services',
    Title: 'Student Service School Jobs',
    Description:
      'As a Student Services Coordinator, you play a crucial role in fostering a positive and supportive learning environment within educational institutions. Your responsibilities encompass providing guidance, counselling, and assistance to students, ensuring their academic success, personal development, and overall well-being. From organising engaging extracurricular activities, too assisting with admissions and maintaining accurate records, you are instrumental in enhancing the overall educational experience for students. If you are empathetic, resourceful, and passionate about helping students thrive, join our team and make a meaningful impact on their educational journey.',
    Keyword: 'Student Service Jobs. Student Service positions',
    content:
      "As a Student Services Coordinator, you will play a pivotal role in fostering a positive learning environment, offering guidance and counselling to students, organising engaging extracurricular activities, and ensuring the overall well-being of our student community. If you are empathetic, resourceful, and committed to students' success, we invite you to apply and make a lasting impact on the educational experience.",
  },
  {
    Name: 'early childhood',
    Title: 'Early Childhood Teaching Jobs',
    Description:
      "As an Early Childhood Teacher, you'll be responsible for providing a stimulating and engaging environment that promotes social, emotional, and cognitive development in young learners. If you have a love for teaching, creativity, and a dedication to fostering a lifelong love for learning, we invite you to apply for this rewarding opportunity.",
    Keyword:
      'Teaching - Early Childhood Jobs. Teaching - Early Childhood positions',
    content:
      "As an Early Childhood Teacher, you'll play a pivotal role in providing a solid foundation for children's lifelong learning by creating a stimulating and nurturing environment where they can explore, discover, and develop essential skills and knowledge. If you're dedicated, patient, and committed to fostering a love for learning in the early years, we invite you to apply and be a part of our dynamic educational community.",
  },
  {
    Name: 'primary',
    Title: 'Primary Teaching Jobs',
    Description:
      "As a Primary School Teacher, you'll play a vital role in providing quality education, creating a positive classroom environment, and nurturing the academic and social development of our primary-aged learners. If you're dedicated, creative, and committed to making a positive impact on children's lives, we invite you to apply and become a key part of our educational community.",
    Keyword: 'Teaching - Primary Jobs. Teaching - Primary positions',
    content:
      "As a Primary School Teacher, you will play a vital role in providing a strong educational foundation for students in their formative years. You'll create engaging and inspiring classroom experiences, nurture a supportive learning environment, and help students develop essential skills and knowledge. If you're passionate about education, dedicated to student success, and excited about helping children reach their full potential, we invite you to apply and be a part of our dynamic educational community.",
  },
  {
    Name: 'secondary',
    Title: 'Secondary Teaching Jobs',
    Description:
      'As a secondary school teacher, you will have the opportunity to make a difference in the lives of young people. You will also enjoy a rewarding career with flexible work hours, competitive salary and benefits, and ongoing professional development.',
    Keyword: 'Teaching - Secondary Jobs. Teaching - Secondary positions',
    content:
      'Secondary school teachers are instrumental in shaping teenagers into who they will become. They guide students through their most formative years, between the ages of 12 and 18 (or Year 7 to Year 12). They teach one or more subjects from the Australian Curriculum, such as mathematics, science, English, languages, arts, and more. They use a variety of methods, including formal lessons, discussions, practical activities, experiments, assessments and excursions to engage students and enhance their learning experiences.',
  },
  {
    Name: 'relief teaching jobs',
    Title: 'Relief Teaching Jobs',
    Description:
      'As a Relief school teacher, you will have the opportunity to make a difference in the lives of young people. You will also enjoy a rewarding career with flexible work hours, competitive salary and benefits, and ongoing professional development.',
    Keyword: 'Teaching - Relief Jobs. Teaching - Relief positions',
    content:
      "Discover flexible and rewarding teaching opportunities with Relief Teaching Jobs. Whether you're an experienced educator or a passionate newcomer, explore diverse roles across subjects and grade levels. Shape your schedule, make a meaningful impact, and join a community of dedicated educators. Relief Teaching Jobs: where flexibility meets fulfillment in education.",
  },
  {
    Name: 'tertiary',
    Title: 'Tertiary Teaching Jobs',
    Description:
      "As a Tertiary Education Instructor, you'll play a pivotal role in delivering high-quality education to college or university students, fostering critical thinking, research skills, and intellectual curiosity. If you're dedicated to academic excellence, enthusiastic about your subject matter, and committed to empowering students to reach their full potential.",
    Keyword: 'Teaching - Tertiary Jobs. Teaching - Tertiary positions',
    content:
      "As a Tertiary Teaching Faculty member, you'll have the opportunity to engage with diverse and motivated students, share your expertise, and contribute to their academic and personal growth. If you're dedicated to fostering a dynamic and transformative learning environment and have a strong commitment to excellence in higher education, we invite you to apply and become part of our vibrant academic community.",
  },
  {
    Name: 'vocational',
    Title: 'Teaching Vocational Jobs',
    Description:
      "As a Vocational Teaching Instructor, you will play a vital role in delivering specialised vocational education programs, sharing your expertise, and preparing students for real-world careers. If you're dedicated to equipping the next generation with valuable skills and helping them thrive in their chosen vocations, we invite you to apply and become an integral part of our dynamic educational community.",
    Keyword: 'Teaching - Vocational Jobs. Teaching - Vocational positions',
    content:
      "Join our institution as a Vocational Education Instructor and play a vital role in preparing students for successful careers in vocational fields. As a Vocational Education Instructor, you will deliver hands-on, industry-relevant training, mentor students, and provide the foundation they need to excel in their chosen careers. If you're passionate about vocational education, possess real-world expertise, and are committed to empowering students with practical skills, we invite you to apply and contribute to our dynamic vocational education programs.",
  },
  {
    Name: 'special needs aides',
    Title: 'Aides & Special Needs School Jobs',
    Description:
      'As a Teaching Aide & Special Needs Support member, you will work closely with educators to provide individualised assistance, guidance, and care to students with special needs. Your dedication will contribute to creating an inclusive and supportive learning environment where every student has the opportunity to thrive. If you are passionate about making education accessible to all, possess empathy and patience, and are committed to helping students reach their full potential, we invite you to apply and be a part of our inclusive educational community.',
    Keyword:
      'Teaching Aides & Special Needs Jobs. Teaching Aides & Special Needs positions',
    content:
      'In this role, you will provide dedicated assistance to students with special needs, working collaboratively with educators to ensure every student has the opportunity to succeed. If you have a caring and patient nature, a commitment to inclusion, and a desire to empower students with diverse learning needs, we invite you to apply and contribute to our inclusive educational community.',
  },
  {
    Name: 'tutoring',
    Title: 'Tutoring Jobs',
    Description:
      " As a Tutor, you will provide personalized, one-on-one or small group instruction to students seeking additional support in various subjects and areas of study. Whether you're an experienced educator, a subject matter expert, or a dedicated enthusiast, your guidance can make a difference. If you're committed to helping students succeed and thrive academically, we invite you to apply and become an essential part of our educational support network.",
    Keyword: 'Tutoring Jobs. Tutoring positions',
    content:
      "As a Tutor, you'll provide personalized one-on-one or small group instruction, helping students master subjects, improve study skills, and build confidence. Whether you're an expert in a specific subject or a general academic mentor, your guidance and support can make a significant difference in students' lives. If you're patient, knowledgeable, and dedicated to empowering students to succeed, we invite you to apply and be a part of our tutoring team.",
  },
  {
    Name: 'training assessment',
    Title: 'Workplace Training & Assessment Jobs',
    Description:
      ' As a Workplace Training & Assessment Instructor, you will have the opportunity to impart essential skills, evaluate competency, and contribute to the professional development of adult learners. If you are an experienced educator with a passion for practical training and assessment, we invite you to apply and be a part of our mission to empower individuals for workplace excellence.',
    Keyword:
      'Workplace Training & Assessment Jobs. Workplace Training & Assessment positions',
    content:
      'Join our team as a Workplace Training & Assessment Specialist and play a vital role in developing and delivering effective training programs. As a specialist, you will assess the learning needs of employees, design tailored training initiatives, and evaluate their impact on workplace performance. If you have a deep understanding of adult learning principles, workplace training strategies, and a commitment to enhancing workforce capabilities, we invite you to apply and contribute to our dynamic approach to employee development.',
  },
  {
    Name: 'relief teaching',
    Title: 'Relief Teaching',
    Description:
      'As a Relief Teacher, you will step into various classroom settings, nurture a positive learning environment, and ensure educational continuity during teacher absences. If you have a strong commitment to education, adaptability, and a desire to inspire young minds, we invite you to apply and become an essential part of our educational community.',
    Keyword: 'Relief Teaching Jobs. Relief Teaching positions',
    content:
      "As a Relief Teacher, you'll step in when regular classroom teachers are absent, providing continuity in education and ensuring that students continue to receive high-quality instruction. If you're passionate about teaching, quick on your feet, and ready to inspire and guide students in diverse classroom settings, we invite you to apply and become an essential part of our educational team.",
  },
  {
    Name: 'admin',
    Title: 'Administrative & Support Services Jobs',
    Description:
      "In this role, you will assist with a wide range of administrative tasks, from record-keeping and scheduling to communications and event coordination. If you're dedicated, resourceful, and committed to ensuring the efficiency and effectiveness of an educational organisation, we invite you to apply and become an integral part of our administrative team.",
    Keyword:
      'Administrative & Support Services Jobs. Administrative & Support Services positions',
    content:
      'Join our team as an Administrative & Support Services Coordinator and play a pivotal role in providing essential support to educators, students, and staff. In this position, you will oversee administrative tasks, manage resources, and ensure the efficient functioning of various support services within the school. If you excel at multitasking, problem-solving, and thrive in a dynamic educational environment, we invite you to apply and become an integral part of our educational community.',
  },
  {
    Name: 'catholic school',
    Title: 'Catholic School Jobs',
    Description:
      "In this role, you will assist with a wide range of administrative tasks, from record-keeping and scheduling to communications and event coordination. If you're dedicated, resourceful, and committed to ensuring the efficiency and effectiveness of an educational organisation, we invite you to apply and become an integral part of our administrative team.",
    Keyword: 'Catholic School Jobs. Catholic School positions',
    content:
      'Join our team as an Administrative & Support Services Coordinator and play a pivotal role in providing essential support to educators, students, and staff. In this position, you will oversee administrative tasks, manage resources, and ensure the efficient functioning of various support services within the school. If you excel at multitasking, problem-solving, and thrive in a dynamic educational environment, we invite you to apply and become an integral part of our educational community.',
    filter1: [{ category: 'schoolType', filter: 'Catholic School' }],
  },
  {
    Name: 'public school',
    Title: 'Public School Jobs',
    Description:
      "In this role, you will assist with a wide range of administrative tasks, from record-keeping and scheduling to communications and event coordination. If you're dedicated, resourceful, and committed to ensuring the efficiency and effectiveness of an educational organisation, we invite you to apply and become an integral part of our administrative team.",
    Keyword: 'Public School Jobs. Public School positions',
    content:
      'Join our team as an Administrative & Support Services Coordinator and play a pivotal role in providing essential support to educators, students, and staff. In this position, you will oversee administrative tasks, manage resources, and ensure the efficient functioning of various support services within the school. If you excel at multitasking, problem-solving, and thrive in a dynamic educational environment, we invite you to apply and become an integral part of our educational community.',
    filter1: [{ category: 'schoolType', filter: 'Public School' }],
  },
  {
    Name: 'private school',
    Title: 'Private School Jobs',
    Description:
      "In this role, you will assist with a wide range of administrative tasks, from record-keeping and scheduling to communications and event coordination. If you're dedicated, resourceful, and committed to ensuring the efficiency and effectiveness of an educational organisation, we invite you to apply and become an integral part of our administrative team.",
    Keyword: 'Private School Jobs. Private School positions',
    content:
      'Join our team as an Administrative & Support Services Coordinator and play a pivotal role in providing essential support to educators, students, and staff. In this position, you will oversee administrative tasks, manage resources, and ensure the efficient functioning of various support services within the school. If you excel at multitasking, problem-solving, and thrive in a dynamic educational environment, we invite you to apply and become an integral part of our educational community.',
    filter1: [{ category: 'schoolType', filter: 'Private School' }],
  },
  {
    Name: 'independent public school',
    Title: 'Independent Public School Jobs',
    Description:
      "In this role, you will assist with a wide range of administrative tasks, from record-keeping and scheduling to communications and event coordination. If you're dedicated, resourceful, and committed to ensuring the efficiency and effectiveness of an educational organisation, we invite you to apply and become an integral part of our administrative team.",
    Keyword:
      'Independent Public School Jobs. Independent Public School positions',
    content:
      'Join our team as an Administrative & Support Services Coordinator and play a pivotal role in providing essential support to educators, students, and staff. In this position, you will oversee administrative tasks, manage resources, and ensure the efficient functioning of various support services within the school. If you excel at multitasking, problem-solving, and thrive in a dynamic educational environment, we invite you to apply and become an integral part of our educational community.',
    filter1: [{ category: 'schoolType', filter: 'Independent Public School' }],
  },
];
export default positionData;
