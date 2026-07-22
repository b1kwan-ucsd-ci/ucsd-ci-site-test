/* UC San Diego Clinical Informatics Fellowship — publication data
 * Single source of truth for the Research page. Rendered by research.html.
 * To add a paper: copy an entry below and edit. Fields:
 *   pmid      PubMed ID (string) — the article link is built from this
 *   year      publication year (number) — drives the year filter
 *   journal   journal abbreviation (string)
 *   title     article title (string; HTML entities like &ndash; allowed)
 *   authors   author list (HTML string; wrap program/core faculty in <b>...</b>)
 *   highlight (optional) shows the paper in the rotating hero:
 *             { venue: "High impact \u00b7 JAMA \u00b7 2026", order: 0, authors?: "<short author string>" }
 *             lower order = earlier in the rotation; authors falls back to the full list.
 * Regenerate candidates from PubMed with tools/pull-pubmed.mjs (see tools/README.md).
 */
window.PUBLICATIONS = [
  {
    "pmid": "42150298",
    "year": 2026,
    "journal": "J Emerg Med",
    "title": "Cybersecurity and Emergency Medicine: A Literary Review",
    "authors": "Kahl NM, Frieden MJ, <b>Killeen JP</b>, Chan TC, Longhurst CA, Tully JL, Dameff CJ."
  },
  {
    "pmid": "41920565",
    "year": 2026,
    "journal": "JAMA",
    "title": "Changes in Clinician Time Expenditure and Visit Quantity With Adoption of AI-Powered Scribes: A Multisite Study",
    "authors": "Rotenstein LS, Holmgren AJ, &hellip; <b>Singh K</b>, Tai-Seale M, Melnick ER, Bates DW, Adler-Milstein J, et al.",
    "highlight": {
      "venue": "High impact · JAMA · 2026",
      "order": 0,
      "authors": "Rotenstein LS, &hellip; <b>Singh K</b>, Tai-Seale M, Melnick ER, Bates DW, Adler-Milstein J, et al. &middot; JAMA"
    }
  },
  {
    "pmid": "41758510",
    "year": 2026,
    "journal": "JAMA Netw Open",
    "title": "Multicenter Prospective Validation of an Updated Proprietary Sepsis Prediction Model",
    "authors": "Wong A, Currey D, &hellip; <b>Singh K</b>, Bhavani SV, Lyons PG, Sjoding MW, Tarabichi Y."
  },
  {
    "pmid": "41729512",
    "year": 2026,
    "journal": "JAMA",
    "title": "US Newborn Hepatitis B Virus Vaccination Rates",
    "authors": "Rothman JM, <b>Kwan B</b>, Longhurst CA, Jena AB.",
    "highlight": {
      "venue": "High impact · JAMA · 2026",
      "order": 5,
      "authors": "Rothman JM, <b>Kwan B</b>, Longhurst CA, Jena AB. &middot; JAMA"
    }
  },
  {
    "pmid": "42149597",
    "year": 2026,
    "journal": "JAMA Netw Open",
    "title": "Rates of Leucovorin Prescriptions for Children With Autism",
    "authors": "Rothman JM, <b>Kwan B</b>, Longhurst CA, Jena AB.",
    "highlight": {
      "venue": "High impact · JAMA Netw Open · 2026",
      "order": 4,
      "authors": "Rothman JM, <b>Kwan B</b>, Longhurst CA, Jena AB. &middot; JAMA Netw Open"
    }
  },
  {
    "pmid": "42106553",
    "year": 2026,
    "journal": "npj Digit Med",
    "title": "Dataset documentation for responsible AI: analysis of suitability and usage for health datasets",
    "authors": "Heinke A, Huang L, &hellip; <b>Singh K</b>, Baxter SL, Lee CS, Lee AY, Patel B; AI-READI Consortium."
  },
  {
    "pmid": "42044461",
    "year": 2026,
    "journal": "JCO Clin Cancer Inform",
    "title": "Clinicogenomic Real-World Data Enable Prediction of Hospital Readmissions at a Comprehensive Cancer Center",
    "authors": "Kalahasti NV, Donepudi G, &hellip; <b>Hogarth M</b>, Califano J, Fisch KM."
  },
  {
    "pmid": "42032114",
    "year": 2026,
    "journal": "npj Digit Med",
    "title": "Exploring the limits of localization: federated model stacking improves hospital-level prediction in a national research network",
    "authors": "Cao J, Balczewski E, &hellip; Kheterpal S, Mathis MR, <b>Singh K</b>."
  },
  {
    "pmid": "41745369",
    "year": 2026,
    "journal": "J Pers Med",
    "title": "Model-Informed Precision Dosing: a framework for therapeutic drug monitoring integrating ML and AI within population health informatics",
    "authors": "Le J, Le HN, &hellip; <b>Singh K</b>, <b>Sitapati AM</b>."
  },
  {
    "pmid": "41644679",
    "year": 2026,
    "journal": "npj Digit Med",
    "title": "Scaling medical device regulatory science using large language models",
    "authors": "Li H, He X, Subbaswamy A, Vossler P, Gossmann A, <b>Singh K</b>, Feng J."
  },
  {
    "pmid": "41640509",
    "year": 2026,
    "journal": "npj Health Syst",
    "title": "Application of a machine learning model to predict the estimated primary care patient time consumption",
    "authors": "Yu Y, Diaz J, Kuo TT, Mo A, Pope Z, Hwang HS, <b>Sitapati AM</b>."
  },
  {
    "pmid": "39752665",
    "year": 2025,
    "journal": "Diagnosis (Berl)",
    "title": "Breaking the guidelines: how financial unawareness fuels guideline deviations and inefficient DVT diagnostics",
    "authors": "<b>El-Kareh R</b>, Sebestyen E, Ujvarosy D, Emri M, Bhattoa HP, Kappelmayer J, Miller KE, Toth G."
  },
  {
    "pmid": "40358336",
    "year": 2025,
    "journal": "Anesthesiology",
    "title": "Digital Disasters: The Growing Threat of Healthcare Ransomware",
    "authors": "<b>Tully JL</b>, Gabriel RA, Waterman RS, <b>Dameff CJ</b>."
  },
  {
    "pmid": "39808709",
    "year": 2025,
    "journal": "Anesth Analg",
    "title": "Classification of Surgical Patients Needing Preoperative Cardiac Evaluations: A Comparison of General-Purpose and Domain-Specific Large Language Models",
    "authors": "<b>Tully JL</b>, Litake O, Meineke MN, Simpson S, Waterman RS, Gabriel RA."
  },
  {
    "pmid": "40336266",
    "year": 2025,
    "journal": "J Alzheimers Dis",
    "title": "Artificial intelligence-driven natural language processing for identifying linguistic patterns in Alzheimer's disease and mild cognitive impairment",
    "authors": "Nyongesa CA, <b>Hogarth M</b>, Pa J."
  },
  {
    "pmid": "40359396",
    "year": 2025,
    "journal": "Fam Pract Manag",
    "title": "Cybersecurity Preparedness and Resiliency in a Family Medicine Clinic",
    "authors": "Frieden M, Straw I, Kahl N, <b>Yung N</b>, Madden G, <b>Dameff C</b>, <b>Tully J</b>."
  },
  {
    "pmid": "40582103",
    "year": 2025,
    "journal": "Am J Emerg Med",
    "title": "Evaluating the impact of home telehealth video visits on older adults following emergency department discharge",
    "authors": "Kahl NM, Zimmerman IC, <b>Killeen JP</b>, Castillo EM, Chan TC, Brennan JJ, Davis AF, Agnihotri P, Tolia VM, Kreshak AA."
  },
  {
    "pmid": "40682764",
    "year": 2025,
    "journal": "JAMA Netw Open",
    "title": "Patient Care Technology Disruptions Associated With the CrowdStrike Outage",
    "authors": "<b>Tully JL</b>, Rao S, Straw I, Gabriel RA, Longhurst CA, Savage S, Voelker GM, <b>Dameff CJ</b>."
  },
  {
    "pmid": "39405325",
    "year": 2025,
    "journal": "JAMA",
    "title": "Testing and Evaluation of Health Care Applications of Large Language Models: A Systematic Review",
    "authors": "Bedi S, Liu Y, Orr-Ewing L, Dash D, Koyejo S, &hellip; Shah NR, <b>Singh K</b>, Tazbaz T, Milstein A, Pfeffer MA, Shah NH.",
    "highlight": {
      "venue": "High impact · JAMA · 2025",
      "order": 1,
      "authors": "<b>Singh K</b>, et al. &middot; JAMA"
    }
  },
  {
    "pmid": "41296367",
    "year": 2026,
    "journal": "JAMA Surg",
    "title": "Data and the Art of Surgical Preference Card Maintenance",
    "authors": "Perez S, Mancebo A Jr, &hellip; Clary B, Longhurst CA, Mekeel K, <b>Singh K</b>."
  },
  {
    "pmid": "40640628",
    "year": 2025,
    "journal": "Surg Endosc",
    "title": "First use of an augmented reality headset in minimally invasive general surgery: seeing is believing",
    "authors": "Broderick RC, Spurzem GJ, <b>Reeves JJ</b>, Hollandsworth HM, Jacobsen GR, Longhurst CA, Horgan S."
  },
  {
    "pmid": "40523007",
    "year": 2025,
    "journal": "J Am Med Inform Assoc",
    "title": "Developing and sustaining inclusive language in biomedical informatics communications (AMIA-endorsed guidelines)",
    "authors": "Bear Don't Walk O, Haldar S, &hellip; <b>Yung N</b>, et al."
  },
  {
    "pmid": "39822924",
    "year": 2025,
    "journal": "Learn Health Syst",
    "title": "Learning health system research as a catalyst for promoting physician wellness: EHR In Basket spring cleaning and team-based compassion practice",
    "authors": "Tai-Seale M, Walker A, <b>Yung N</b>, <b>Mandvi A</b>, Kallenberg G, Longhurst CA, <b>Millen M</b>, et al."
  },
  {
    "pmid": "39693087",
    "year": 2025,
    "journal": "JAMA Surg",
    "title": "Leveraging Lean Methodology to Improve Compliance With Work-Hour Restrictions",
    "authors": "<b>Reeves JJ</b>, Goldhaber N, Hollandsworth H, Longhurst CA, Jacobsen G, Clary B, et al."
  },
  {
    "pmid": "38273780",
    "year": 2024,
    "journal": "Pediatrics",
    "title": "Standardizing Medication Reconciliation in a Pediatric Emergency Department",
    "authors": "Sheth S, <b>Bialostozky M</b>, Hollenbach KA, Heitzman L, O'Crump D, Mishra S, Langley G, Santiago K, Saleh F, Billman G, Bryl A."
  },
  {
    "pmid": "38839064",
    "year": 2024,
    "journal": "Appl Clin Inform",
    "title": "Preparing Future Pediatric Care Providers with a Clinical Informatics Elective",
    "authors": "Rungvivatjarus T, <b>Bialostozky M</b>, Chong AZ, Huang JS, Kuelbs CL."
  },
  {
    "pmid": "42114819",
    "year": 2026,
    "journal": "Appl Clin Inform",
    "title": "Assessment of Clinical Informatics Interest and the Impact of Advanced EHR Training on Trainee Proficiency",
    "authors": "Rungvivatjarus T, Joshi W, <b>Bialostozky M</b>."
  },
  {
    "pmid": "41438307",
    "year": 2025,
    "journal": "Clin Diabetes",
    "title": "Increasing Lipid Profile Screening in Youth With Type 2 Diabetes",
    "authors": "Singh P, Byer-Mendoza C, McNamara K, Huber A, Ruiz J, <b>Bialostozky M</b>, Demeterco-Berggren C."
  },
  {
    "pmid": "39034484",
    "year": 2024,
    "journal": "J Pediatr Gastroenterol Nutr",
    "title": "Electronic medical record clinical workload metrics from 10,210 gastroenterologists in North America",
    "authors": "Huang JS, <b>Bialostozky M</b>."
  },
  {
    "pmid": "38471748",
    "year": 2024,
    "journal": "Pediatr Emerg Care",
    "title": "Presentation, Management, and Child Protective Service Reporting of Children Who Test Positive for Cannabis in an Emergency Room Setting",
    "authors": "Dubinin A, <b>Bialostozky M</b>, Richardson A, Laub N."
  },
  {
    "pmid": "38194745",
    "year": 2024,
    "journal": "Healthc (Amst)",
    "title": "Training pediatric physicians and staff to obtain data from the electronic health record",
    "authors": "Rungvivatjarus T, Chong AZ, Patel A, Khare M, <b>Bialostozky M</b>, Kuelbs CL."
  },
  {
    "pmid": "38053440",
    "year": 2024,
    "journal": "Pediatrics",
    "title": "Increasing Chlamydia and Gonorrhea Testing for Adolescents in the Pediatric Emergency Department",
    "authors": "Vayngortin T, Gracia M, Clark K, Vayngortin B, <b>Bialostozky M</b>, Heitzman L, Hollenbach K, Kumar M, Titchen K, Bryl A."
  },
  {
    "pmid": "37001917",
    "year": 2023,
    "journal": "BMJ Open",
    "title": "Efficacy of a digital mental health intervention embedded in routine care compared with treatment as usual in adolescents and young adults with moderate depressive symptoms: protocol for randomised controlled trial",
    "authors": "Szigethy E, Wolfson D, Sinclair-McBride K, Williams K, Jhe G, Lee EH, <b>Bialostozky M</b>, Wallace M, Bhatnagar S, Demaso DR, Yealy DM, Hollenbach K."
  },
  {
    "pmid": "36545248",
    "year": 2022,
    "journal": "Geohealth",
    "title": "Mediating Role of Fine Particles Abatement on Pediatric Respiratory Health During COVID-19 Stay-at-Home Order in San Diego County, California",
    "authors": "Aguilera R, Leibel S, Corringham T, <b>Bialostozky M</b>, Nguyen MB, Gershunov A, Benmarhnia T."
  },
  {
    "pmid": "32131116",
    "year": 2020,
    "journal": "Appl Clin Inform",
    "title": "Are You In or Are You Out? Provider Note Sharing in Pediatrics",
    "authors": "<b>Bialostozky M</b>, Huang JS, Kuelbs CL."
  },
  {
    "pmid": "38265802",
    "year": 2024,
    "journal": "JAMA Netw Open",
    "title": "An Automated System for Physician Trainee Procedure Logging via Electronic Health Records",
    "authors": "<b>Kwan B</b>, Engel J, Steele B, Oyama L, Longhurst CA, <b>El-Kareh R</b>, Daniel M, Goldberg C, <b>Clay B</b>."
  },
  {
    "pmid": "38700859",
    "year": 2024,
    "journal": "JAMA Netw Open",
    "title": "Real-Time Electronic Patient Portal Use Among Emergency Department Patients",
    "authors": "Turer RW, McDonald SA, Lehmann CU, Thakur B, Dutta S, &hellip; <b>Kwan B</b>, <b>Dameff C</b>, <b>Killeen JP</b>, Hall MK, Rosenbloom ST, Steitz BD."
  },
  {
    "pmid": "39250110",
    "year": 2024,
    "journal": "JAMA Intern Med",
    "title": "Cybersecurity Lessons From the Change Healthcare Attack",
    "authors": "Neprash HT, <b>Dameff C</b>, <b>Tully J</b>."
  },
  {
    "pmid": "39703686",
    "year": 2024,
    "journal": "NEJM AI",
    "title": "Large Language Models for More Efficient Reporting of Hospital Quality Measures",
    "authors": "Boussina A, Krishnamoorthy R, Quintero K, Joshi S, Wardi G, &hellip; <b>Hogarth M</b>, <b>Sitapati AM</b>, VanDenBerg C, <b>Singh K</b>, Longhurst CA, Nemati S.",
    "highlight": {
      "venue": "High impact · NEJM AI · 2024",
      "order": 2,
      "authors": "Boussina A, <b>Hogarth M</b>, <b>Sitapati AM</b>, Longhurst CA, <b>Singh K</b>, et al. &middot; NEJM AI"
    }
  },
  {
    "pmid": "38619840",
    "year": 2024,
    "journal": "JAMA Netw Open",
    "title": "AI-Generated Draft Replies Integrated Into Health Records and Physicians' Electronic Communication",
    "authors": "Tai-Seale M, Baxter SL, <b>Sitapati AM</b>, <b>Mandvi A</b>, <b>Millen M</b>, Longhurst CA, et al."
  },
  {
    "pmid": "38601475",
    "year": 2024,
    "journal": "JAMIA Open",
    "title": "Generative artificial intelligence responses to patient messages in the electronic health record: early lessons learned",
    "authors": "Baxter SL, Longhurst CA, <b>Millen M</b>, <b>Sitapati AM</b>, Tai-Seale M."
  },
  {
    "pmid": "39473881",
    "year": 2024,
    "journal": "JAMIA Open",
    "title": "Patient characteristics and health system encounters of decedents not marked deceased in the electronic health record",
    "authors": "Sanz Vidorreta FJ, Dudley MT, Walling AM, Tseng CH, <b>Hogarth M</b>, Wenger NS."
  },
  {
    "pmid": "39258951",
    "year": 2024,
    "journal": "Crit Care Explor",
    "title": "Development and Validation of a Deep Learning Model for Prediction of Adult Physiological Deterioration",
    "authors": "Shashikumar SP, Le JP, <b>Yung N</b>, Ford J, <b>Singh K</b>, Malhotra A, Nemati S, Wardi G."
  },
  {
    "pmid": "38281026",
    "year": 2024,
    "journal": "BMC Prim Care",
    "title": "Navigating the doctor&ndash;patient&ndash;AI relationship: a mixed-methods study of physician attitudes toward AI in primary care",
    "authors": "Allen MR, Webb S, <b>Mandvi A</b>, Frieden M, Tai-Seale M, Kallenberg G."
  },
  {
    "pmid": "37155166",
    "year": 2023,
    "journal": "JAMA Netw Open",
    "title": "Ransomware Attack Associated With Disruptions at Adjacent Emergency Departments in the US",
    "authors": "<b>Dameff C</b>, <b>Tully J</b>, Chan TC, Castillo EM, Savage S, Maysent P, Hemmen TM, <b>Clay BJ</b>, Longhurst CA.",
    "highlight": {
      "venue": "High impact · JAMA Netw Open · 2023",
      "order": 3,
      "authors": "<b>Dameff C</b>, <b>Tully J</b>, Chan TC, Castillo EM, Savage S, Longhurst CA, et al. &middot; JAMA Netw Open"
    }
  },
  {
    "pmid": "36449288",
    "year": 2022,
    "journal": "JAMA Netw Open",
    "title": "Association of Electronic Health Record In Basket Message Characteristics With Physician Burnout",
    "authors": "Baxter SL, Longhurst CA, Sinsky CA, <b>Millen M</b>, Tai-Seale M, et al."
  },
  {
    "pmid": "36252175",
    "year": 2022,
    "journal": "Am J Manag Care",
    "title": "Implementing clinical informatics tools for primary care-based diabetic retinopathy screening",
    "authors": "Baxter SL, Quackenbush Q, Cerda J, Gregg C, <b>Millen M</b>, Thorne C."
  },
  {
    "pmid": "35414475",
    "year": 2022,
    "journal": "J Surg Educ",
    "title": "A Novel Fellowship in Perioperative Administration, Quality and Informatics: A Pilot Experience for Training Surgical Leaders",
    "authors": "<b>Reeves JJ</b>, Longhurst CA, Mekeel KL, Goldhaber NH, <b>Clay BJ</b>, Waterman RS, Rhodes LP, McHale M, Clary BM."
  },
  {
    "pmid": "33180032",
    "year": 2021,
    "journal": "Diagnosis (Berl)",
    "title": "Identifying trigger concepts to screen emergency department visits for diagnostic errors",
    "authors": "Mahajan P, Pai CW, Cosby KS, Mollen CJ, Shaw KN, Chamberlain JM, <b>El-Kareh R</b>, Ruddy RM, Epstein HM, Giardina TD, Graber ML, Singh H."
  },
  {
    "pmid": "34479384",
    "year": 2021,
    "journal": "Yearb Med Inform",
    "title": "The Clinical Information Systems Response to the COVID-19 Pandemic",
    "authors": "<b>Reeves JJ</b>, Pageler NM, Wick EC, Melton GB, Tan YG, <b>Clay BJ</b>, Longhurst CA."
  },
  {
    "pmid": "34435960",
    "year": 2021,
    "journal": "JMIR Res Protoc",
    "title": "Implementation of Patient Engagement Tools in Electronic Health Records to Enhance Patient-Centered Communication",
    "authors": "Tai-Seale M, Rosen R, Ruo B, <b>Hogarth M</b>, Longhurst CA, Lander L, Walker AL, Stults CD, Chan A, Mazor K, Garber L, <b>Millen M</b>."
  },
  {
    "pmid": "32432722",
    "year": 2020,
    "journal": "JAMA Surg",
    "title": "Association of Electronic Surgical Consent Forms With Entry Error Rates",
    "authors": "<b>Reeves JJ</b>, Mekeel KL, Waterman RS, Rhodes LR, <b>Clay BJ</b>, Clary BM, Longhurst CA."
  },
  {
    "pmid": "32568038",
    "year": 2020,
    "journal": "Emerg Infect Dis",
    "title": "Public Health Role of Academic Medical Center in Community Outbreak of Hepatitis A, San Diego County, 2016&ndash;2018",
    "authors": "Kang M, Horman SF, Taplitz RA, <b>Clay B</b>, <b>Millen M</b>, <b>Sitapati A</b>, Myers FE, McDonald EC, Abeles SR, Wallace DR, Stous S, Torriani FJ."
  },
  {
    "pmid": "32208481",
    "year": 2020,
    "journal": "J Am Med Inform Assoc",
    "title": "Rapid response to COVID-19: health informatics support for outbreak management in an academic health system",
    "authors": "<b>Reeves JJ</b>, <b>Millen M</b>, <b>Clay BJ</b>, Tai-Seale M, Longhurst CA, et al."
  },
  {
    "pmid": "26097801",
    "year": 2015,
    "journal": "Diagnosis (Berl)",
    "title": "Clinical criteria to screen for inpatient diagnostic errors: a scoping review",
    "authors": "Shenvi EC, <b>El-Kareh R</b>."
  },
  {
    "pmid": "23852973",
    "year": 2013,
    "journal": "BMJ Qual Saf",
    "title": "Use of health information technology to reduce diagnostic errors",
    "authors": "<b>El-Kareh R</b>, Hasan O, Schiff GD."
  },
  {
    "pmid": "26767059",
    "year": 2015,
    "journal": "Appl Clin Inform",
    "title": "Use of an Expedited Review Tool to Screen for Prior Diagnostic Error in Emergency Department Patients",
    "authors": "Hudspeth J, <b>El-Kareh R</b>, Schiff G."
  },
  {
    "pmid": "26759647",
    "year": 2015,
    "journal": "West J Emerg Med",
    "title": "Inpatient Readmissions and Emergency Department Visits within 30 Days of a Hospital Admission",
    "authors": "Brennan JJ, Chan TC, <b>Killeen JP</b>, Castillo EM."
  },
  {
    "pmid": "17238377",
    "year": 2006,
    "journal": "AMIA Annu Symp Proc",
    "title": "A wireless first responder handheld device for rapid triage, patient assessment and documentation during mass casualty incidents",
    "authors": "<b>Killeen JP</b>, Chan TC, Buono C, Griswold WG, Lenert LA."
  },
  {
    "pmid": "15528589",
    "year": 2004,
    "journal": "Acad Emerg Med",
    "title": "Information technology and emergency medical care during disasters",
    "authors": "Chan TC, <b>Killeen J</b>, Griswold W, Lenert L."
  },
  {
    "pmid": "37435746",
    "year": 2023,
    "journal": "J Am Geriatr Soc",
    "title": "Clinical and financial outcome impacts of comprehensive geriatric assessment in a level 1 geriatric emergency department",
    "authors": "Haynesworth A, Gilmer TP, Brennan JJ, Weaver EH, Tolia VM, Chan TC, <b>Killeen JP</b>, Castillo EM."
  },
  {
    "pmid": "33423835",
    "year": 2021,
    "journal": "J Emerg Med",
    "title": "The Implementation of an Emergency Medicine Telehealth System During a Pandemic",
    "authors": "Tresenriter M, Holdaway J, <b>Killeen J</b>, Chan T, Dameff C."
  },
  {
    "pmid": "31959537",
    "year": 2020,
    "journal": "Ann Emerg Med",
    "title": "Cyber Disaster Medicine: A New Frontier for Emergency Medicine",
    "authors": "Dameff C, Farah J, <b>Killeen J</b>, Chan T."
  },
  {
    "pmid": "30553562",
    "year": 2019,
    "journal": "J Emerg Med",
    "title": "Clinical Cybersecurity Training Through Novel High-Fidelity Simulations",
    "authors": "Dameff CJ, Selzer JA, Fisher J, <b>Killeen JP</b>, Tully JL."
  },
  {
    "pmid": "30802936",
    "year": 2019,
    "journal": "J Am Geriatr Soc",
    "title": "Prevalence of Benzodiazepine and Benzodiazepine-Receptor Agonist Use in a Geriatric Emergency Department Population",
    "authors": "Minns AB, Kreshak A, Dunlay R, Castillo E, Clark RF, <b>Killeen J</b>, Tolia V."
  },
  {
    "pmid": "28939397",
    "year": 2017,
    "journal": "J Emerg Med",
    "title": "National Survey of Emergency Physicians Concerning Home-Based Care Options as Alternatives to Emergency Department-Based Hospital Admissions",
    "authors": "Stuck AR, Crowley C, <b>Killeen J</b>, Castillo EM."
  },
  {
    "pmid": "27692839",
    "year": 2016,
    "journal": "J Emerg Med",
    "title": "Survey and Chart Review to Estimate Medicare Cost Savings for Home Health as an Alternative to Hospital Admission Following Emergency Department Treatment",
    "authors": "Crowley C, Stuck AR, Martinez T, Wittgrove AC, Zeng F, Brennan JJ, Chan TC, <b>Killeen JP</b>, Castillo EM."
  },
  {
    "pmid": "24813059",
    "year": 2014,
    "journal": "J Emerg Med",
    "title": "Identifying frequent users of emergency department resources",
    "authors": "Castillo EM, Brennan JJ, <b>Killeen JP</b>, Chan TC."
  },
  {
    "pmid": "21993045",
    "year": 2011,
    "journal": "Prehosp Disaster Med",
    "title": "Impact of wireless electronic medical record system on the quality of patient documentation by emergency field responders during a disaster mass-casualty exercise",
    "authors": "Chan TC, Griswold WG, Buono C, Kirsh D, Lyon J, <b>Killeen JP</b>, Castillo EM, Lenert L."
  },
  {
    "pmid": "20536811",
    "year": 2010,
    "journal": "Acad Emerg Med",
    "title": "Effect of mandated nurse-patient ratios on patient wait time and care time in the emergency department",
    "authors": "Chan TC, <b>Killeen JP</b>, Vilke GM, Marshall JB, Castillo EM."
  },
  {
    "pmid": "19237258",
    "year": 2010,
    "journal": "J Emerg Med",
    "title": "Impact of an express admit unit on emergency department length of stay",
    "authors": "Buckley BJ, Castillo EM, <b>Killeen JP</b>, Guss DA, Chan TC."
  },
  {
    "pmid": "18514465",
    "year": 2010,
    "journal": "J Emerg Med",
    "title": "Improving service quality by understanding emergency department flow: a White Paper and position statement prepared for the American Academy of Emergency Medicine",
    "authors": "Eitel DR, Rudkin SE, Malvehy MA, <b>Killeen JP</b>, Pines JM."
  },
  {
    "pmid": "19070939",
    "year": 2009,
    "journal": "Ann Emerg Med",
    "title": "Impact of an internet-based emergency department appointment system to access primary care at safety net community clinics",
    "authors": "Chan TC, <b>Killeen JP</b>, Castillo EM, Vilke GM, Guss DA, Feinberg R, Friedman L."
  },
  {
    "pmid": "17467118",
    "year": 2008,
    "journal": "Ann Emerg Med",
    "title": "The impact of a pneumatic tube and computerized physician order management on laboratory turnaround time",
    "authors": "Guss DA, Chan TC, <b>Killeen JP</b>."
  },
  {
    "pmid": "18693987",
    "year": 2007,
    "journal": "AMIA Annu Symp Proc",
    "title": "Comparison of the effectiveness of wireless electronic tracking devices versus traditional paper systems to track victims in a large scale disaster",
    "authors": "Buono CJ, Chan TC, <b>Killeen J</b>, Huang R, Brown S, Liu F, Palmer D, Griswold W, Lenert L."
  },
  {
    "pmid": "17238495",
    "year": 2006,
    "journal": "AMIA Annu Symp Proc",
    "title": "Tablet computing for disaster scene managers",
    "authors": "Chan TC, Buono CJ, <b>Killeen JP</b>, Griswold WG, Huang R, Lenert L."
  },
  {
    "pmid": "17238487",
    "year": 2006,
    "journal": "AMIA Annu Symp Proc",
    "title": "Role-tailored software systems for coordinating care at disaster sites: enhancing collaboration between the base hospitals with the field",
    "authors": "Buono C, Huang R, Brown S, Chan TC, <b>Killeen J</b>, Lenert L."
  },
  {
    "pmid": "16308060",
    "year": 2005,
    "journal": "Ann Emerg Med",
    "title": "Impact of rapid entry and accelerated care at triage on reducing emergency department patient wait times, lengths of stay, and rate of left without being seen",
    "authors": "Chan TC, <b>Killeen JP</b>, Kelly D, Guss DA."
  },
  {
    "pmid": "24551418",
    "year": 2013,
    "journal": "AMIA Annu Symp Proc",
    "title": "When you can't tell when it hurts: a preliminary algorithm to assess pain in patients who can't communicate",
    "authors": "Wang S, Jiang X, Ji Z, <b>El-Kareh R</b>, Choi J, Kim H."
  },
  {
    "pmid": "22493049",
    "year": 2012,
    "journal": "J Am Med Inform Assoc",
    "title": "A patient-driven adaptive prediction technique to improve personalized risk estimation for clinical decision support",
    "authors": "Jiang X, Boxwala AA, <b>El-Kareh R</b>, Kim J, Ohno-Machado L."
  },
  {
    "pmid": "42253468",
    "year": 2026,
    "journal": "Learn Health Syst",
    "title": "Large Language Models for Summarizing Advance Care Planning Information From Goals of Care Notes in the EHR",
    "authors": "Ekbote N, Akhondzadeh M, Graham R, Bell J, Glasser D, <b>El-Kareh R</b>, Chua A, Boussina A, Tai-Seale A, Poursoltan L, Singh K, Agnihotri P, Tai-Seale M."
  },
  {
    "pmid": "40840367",
    "year": 2025,
    "journal": "JMIR Hum Factors",
    "title": "Clinician Needs and Requirements for a Decision Aid Navigator: Qualitative Study",
    "authors": "Morse B, Reale C, Nguyen AT, Latella E, Bauguess H, Anders S, Roberts P, SooHoo SL, <b>El-Kareh R</b>, Soares A, Schilling L."
  },
  {
    "pmid": "40318498",
    "year": 2025,
    "journal": "Int J Med Inform",
    "title": "Evaluating the impact of explainable AI on clinicians' decision-making: A study on ICU length of stay prediction",
    "authors": "Jung J, Kang S, Choi J, <b>El-Kareh R</b>, Lee H, Kim H."
  },
  {
    "pmid": "39609937",
    "year": 2025,
    "journal": "J Hosp Med",
    "title": "Employing EHR usage data to improve care requires clinician engagement and trust",
    "authors": "Rule A, <b>El-Kareh R</b>."
  },
  {
    "pmid": "39958729",
    "year": 2025,
    "journal": "Heliyon",
    "title": "Predicting positive Clostridioides difficile test results using large-scale longitudinal data of demographics and medication history",
    "authors": "Pham A, <b>El-Kareh R</b>, Myers F, Ohno-Machado L, Kuo TT."
  },
  {
    "pmid": "39238228",
    "year": 2024,
    "journal": "Diagnosis (Berl)",
    "title": "Root cause analysis of cases involving diagnosis",
    "authors": "Graber ML, Castro GM, Danforth M, Tilly JL, Croskerry P, <b>El-Kareh R</b>, Hemmalgarn C, Ryan R, Tozier MP, Trowbridge B, Wright J, Zwaan L."
  },
  {
    "pmid": "38974783",
    "year": 2024,
    "journal": "AEM Educ Train",
    "title": "Impact of an automated patient outcome feedback system on emergency medicine resident patient follow-up: An interrupted time series analysis",
    "authors": "Rudolf F, Oyama LC, <b>El-Kareh R</b>."
  },
  {
    "pmid": "38335993",
    "year": 2024,
    "journal": "Comput Inform Nurs",
    "title": "Nurse and Physician Perceptions and Decision Making During Interdisciplinary Communication: Factors That Influence Communication Channel Selection",
    "authors": "Nibbelink CW, Dunn Lopez K, <b>Reeves JJ</b>, Horman S, <b>El-Kareh RE</b>."
  },
  {
    "pmid": "38263386",
    "year": 2024,
    "journal": "NPJ Digit Med",
    "title": "Impact of a deep learning sepsis prediction model on quality of care and survival",
    "authors": "Boussina A, Shashikumar SP, Malhotra A, Owens RL, <b>El-Kareh R</b>, Longhurst CA, Quintero K, Donahue A, Chan TC, Nemati S, Wardi G."
  },
  {
    "pmid": "38227643",
    "year": 2024,
    "journal": "Clin Infect Dis",
    "title": "Integrated Genomic and Social Network Analyses of SARS-CoV-2 Transmission in the Healthcare Setting",
    "authors": "Keehner J, Abeles SR, Longhurst CA, Horton LE, Myers FE, Riggs-Rodriguez L, Ahmad M, Baxter S, Boussina A, Cantrell K, Cardenas P, De Hoff P, <b>El-Kareh R</b>, Holland J, Ikeda D, Kurashige K, Laurent LC; SEARCH Alliance; Lucas A, Pride D, Sathe S, Tran AR, Vasylyeva TI, Yeo G, Knight R, Wertheim JO, Torriani FJ."
  },
  {
    "pmid": "37544770",
    "year": 2023,
    "journal": "Health Informatics J",
    "title": "Physicians differ in their perceptions of sensitive medical records: Survey and interview study",
    "authors": "Banerjee I, Syed K, Potturu A, Pragada VS, Sharma RS, Murcko A, Chern D, Todd M, Aking P, Al-Yaqoobi A, Bayless P, Belmonte W, Cuadra T, Dockins T, Eldredge C, <b>El-Kareh R</b>, Gale G, Gentile E, Kalpas E, Morris M, Mueller L, Piekut D, Ross MK, Sarris J, Singh G, Tharani S, Wallace M, Grando MA."
  },
  {
    "pmid": "36977494",
    "year": 2023,
    "journal": "Nicotine Tob Res",
    "title": "Implementation, Maintenance, and Outcomes of an Electronic Referral to a Tobacco Quitline Across Five Health Systems",
    "authors": "Tong EK, Zhu SH, Anderson CM, Avdalovic MV, Amin AN, Diamant AL, Fong TW, <b>Clay B</b>, <b>El-Kareh R</b>, Sankaran S, Bonniot C, Kirby CA, Mayoral A, Sarna L."
  },
  {
    "pmid": "36948542",
    "year": 2023,
    "journal": "BMJ Qual Saf",
    "title": "What works in medication reconciliation: an on-treatment and site analysis of the MARQUIS2 study",
    "authors": "Schnipper JL, Reyes Nieva H, Yoon C, Mallouk M, Mixon AS, Rennke S, Chu ES, Mueller SK, Smith GR Jr, Williams MV, Wetterneck TB, Stein J, Dalal AK, Labonville S, Sridharan A, Stolldorf DP, Orav EJ, Gresham M, Goldstein J, Platt S, Nyenpan CT, Howell E, Kripalani S; MARQUIS2 Site Leaders for the MARQUIS2 Study Group; MARQUIS2 Site Leaders."
  },
  {
    "pmid": "36916740",
    "year": 2023,
    "journal": "J Am Med Inform Assoc",
    "title": "Blockchain-enabled immutable, distributed, and highly available clinical research activity logging system for federated COVID-19 data analysis from multiple institutions",
    "authors": "Kuo TT, Pham A, Edelson ME, Kim J, Chan J, Gupta Y, Ohno-Machado L; R2D2 Consortium."
  },
  {
    "pmid": "37448457",
    "year": 2023,
    "journal": "Learn Health Syst",
    "title": "Developing a highly-reliable learning health system",
    "authors": "<b>El-Kareh R</b>, Brenner DA, Longhurst CA."
  },
  {
    "pmid": "36126418",
    "year": 2022,
    "journal": "Healthc (Amst)",
    "title": "Implementation of a Medication Reconciliation Risk Stratification Tool Integrated within an electronic health record: A Case Series of Three Academic Medical Centers",
    "authors": "Chu ES, <b>El-Kareh R</b>, Biondo A, Chang J, Hartman S, Huynh T, Medders K, Nguyen A, Yam N, Succari L, Koenig K, Williams MV, Schnipper J."
  },
  {
    "pmid": "35700668",
    "year": 2022,
    "journal": "J Surg Res",
    "title": "A Novel System to Improve Case Capture for Surgery Morbidity and Mortality Conference",
    "authors": "Mou Z, Sharma AK, Matson J, Hilbert N, Delong J, Ramamoorthy S, Mekeel K, <b>El-Kareh R</b>."
  },
  {
    "pmid": "34932043",
    "year": 2022,
    "journal": "J Trauma Acute Care Surg",
    "title": "Electronic health record machine learning model predicts trauma inpatient mortality in real time: A validation study",
    "authors": "Mou Z, Godat LN, <b>El-Kareh R</b>, Berndtson AE, Doucet JJ, Costantini TW."
  },
  {
    "pmid": "34794627",
    "year": 2022,
    "journal": "Crit Care Clin",
    "title": "Enhancing Diagnosis Through Technology: Decision Support, Artificial Intelligence, and Beyond",
    "authors": "<b>El-Kareh R</b>, Sittig DF."
  },
  {
    "pmid": "33927025",
    "year": 2022,
    "journal": "BMJ Qual Saf",
    "title": "Effects of a refined evidence-based toolkit and mentored implementation on medication reconciliation at 18 hospitals: results of the MARQUIS2 study",
    "authors": "Schnipper JL, Reyes Nieva H, Mallouk M, Mixon A, Rennke S, Chu E, Mueller S, Smith GRR Jr, Williams MV, Wetterneck TB, Stein J, Dalal A, Labonville S, Sridharan A, Stolldorf DP, Orav EJ, Levin B, Gresham M, Yoon C, Goldstein J, Platt S, Nyenpan CT, Howell E, Kripalani S; MARQUIS2 Site Leaders; MARQUIS2 Study Group."
  },
  {
    "pmid": "33694144",
    "year": 2021,
    "journal": "Appl Clin Inform",
    "title": "Algorithmic Detection of Boolean Logic Errors in Clinical Decision Support Statements",
    "authors": "Wright A, Aaron S, McCoy AB, <b>El-Kareh R</b>, Fort D, Kassakian SZ, Longhurst CA, Malhotra S, McEvoy DS, Monsen CB, Schreiber R, Weitkamp AO, Willett DL, Sittig DF."
  },
  {
    "pmid": "33564945",
    "year": 2021,
    "journal": "J Gen Intern Med",
    "title": "Advancing Diagnostic Safety Research: Results of a Systematic Research Priority Setting Exercise",
    "authors": "Zwaan L, <b>El-Kareh R</b>, Meyer AND, Hooftman J, Singh H."
  },
  {
    "pmid": "33118415",
    "year": 2021,
    "journal": "J Diabetes Sci Technol",
    "title": "Insulin Infusion Computer Calculator Programmed Directly Into Electronic Health Record Medication Administration Record",
    "authors": "Kulasa K, Serences B, Nies M, <b>El-Kareh R</b>, Kurashige K, Box K."
  },
  {
    "pmid": "33274310",
    "year": 2020,
    "journal": "J Acad Ophthalmol (2017)",
    "title": "Electronic Health Record Use among Ophthalmology Residents while on Call",
    "authors": "Long CP, Tai-Seale M, <b>El-Kareh R</b>, Lee JE, Baxter SL."
  },
  {
    "pmid": "32706678",
    "year": 2020,
    "journal": "JMIR Med Inform",
    "title": "Prediction of Medical Concepts in Electronic Health Records: Similar Patient Analysis",
    "authors": "Le N, Wiley M, Loza A, Hristidis V, <b>El-Kareh R</b>."
  },
  {
    "pmid": "32595860",
    "year": 2020,
    "journal": "J Grad Med Educ",
    "title": "Using a Location-Sensing Time-Keeping App to Help Track Resident Work Hours",
    "authors": "Zhao B, Lam J, Lee AM, <b>El-Kareh RE</b>, Jacobsen GR."
  },
  {
    "pmid": "32576438",
    "year": 2020,
    "journal": "Jt Comm J Qual Patient Saf",
    "title": "The Effect of Clostridioides difficile Diagnostic Stewardship Interventions on the Diagnosis of Hospital-Onset Clostridioides difficile Infections",
    "authors": "Kang M, Abeles SR, <b>El-Kareh R</b>, Taplitz RA, Nyheim E, Reed SL, Jenkins IH, Seymann GB, Myers FE, Torriani FJ; UCSDH CDI task force."
  },
  {
    "pmid": "32533584",
    "year": 2020,
    "journal": "J Clin Pharmacol",
    "title": "A Correlation of a Medication-Focused Risk Score to Medication Errors at Discharge",
    "authors": "Fung L, Huynh T, Brush T, Medders K, <b>El-Kareh R</b>, Daniels CE."
  },
  {
    "pmid": "32074650",
    "year": 2020,
    "journal": "Appl Clin Inform",
    "title": "Promoting Quality Face-to-Face Communication during Ophthalmology Encounters in the Electronic Health Record Era",
    "authors": "Baxter SL, Gali HE, Chiang MF, Hribar MR, Ohno-Machado L, <b>El-Kareh R</b>, Huang AE, Chen HE, Camp AS, Kikkawa DO, Korn BS, Lee JE, Longhurst CA, <b>Millen M</b>."
  },
  {
    "pmid": "31444963",
    "year": 2020,
    "journal": "Diagnosis (Berl)",
    "title": "Structured case reviews for organizational learning about diagnostic vulnerabilities: initial experiences from two medical centers",
    "authors": "Mathews BK, Fredrickson M, Sebasky M, Seymann G, Ramamoorthy S, Vilke G, Sloane C, Thorson E, <b>El-Kareh R</b>."
  },
  {
    "pmid": "31524644",
    "year": 2019,
    "journal": "Crit Care Med",
    "title": "Frequency, Risk Factors, Causes, and Consequences of Diagnostic Errors in Critically Ill Medical Patients: A Retrospective Cohort Study",
    "authors": "Bergl PA, Taneja A, <b>El-Kareh R</b>, Singh H, Nanchal RS."
  },
  {
    "pmid": "31511070",
    "year": 2019,
    "journal": "BMC Health Serv Res",
    "title": "Design of MARQUIS2: study protocol for a mentored implementation study of an evidence-based toolkit to improve patient safety through medication reconciliation",
    "authors": "Mixon AS, Smith GR Jr, Mallouk M, Nieva HR, Kripalani S, Rennke S, Chu E, Sridharan A, Dalal A, Mueller S, Williams M, Wetterneck T, Stein JM, Stolldorf D, Howell E, Orav J, Labonville S, Levin B, Yoon C, Gresham M, Goldstein J, Platt S, Nyenpan C, Schnipper JL; MARQUIS2 Site Leaders; MARQUIS2 Study Group."
  },
  {
    "pmid": "31412182",
    "year": 2019,
    "journal": "N Engl J Med",
    "title": "The \"All of Us\" Research Program",
    "authors": "All of Us Research Program Investigators; Denny JC, Rutter JL, Goldstein DB, Philippakis A, Smoller JW, Jenkins G, Dishman E."
  },
  {
    "pmid": "31329891",
    "year": 2019,
    "journal": "J Am Med Inform Assoc",
    "title": "Structured override reasons for drug-drug interaction alerts in electronic health records",
    "authors": "Wright A, McEvoy DS, Aaron S, McCoy AB, Amato MG, Kim H, Ai A, Cimino JJ, Desai BR, <b>El-Kareh R</b>, Galanter W, Longhurst CA, Malhotra S, Radecki RP, Samal L, Schreiber R, Shelov E, Sirajuddin AM, Sittig DF."
  },
  {
    "pmid": "33954272",
    "year": 2019,
    "journal": "J Acad Ophthalmol (2017)",
    "title": "Impact of Electronic Health Record Implementation on Ophthalmology Trainee Time Expenditures",
    "authors": "Gali HE, Baxter SL, Lander L, Huang AE, <b>Millen M</b>, <b>El-Kareh R</b>, Nudleman E, Chao DL, Robbins SL, Heichel CWD, Camp AS, Korn BS, Lee JE, Kikkawa DO, Longhurst CA, Chiang MF, Hribar MR, Ohno-Machado L."
  },
  {
    "pmid": "31029130",
    "year": 2019,
    "journal": "BMC Med Inform Decis Mak",
    "title": "An open access medical knowledge base for community driven diagnostic decision support system development",
    "authors": "Müller L, Gangadharaiah R, Klein SC, Perry J, Bernstein G, Nurkse D, Wailes D, Graham R, <b>El-Kareh R</b>, Mehta S, Vinterbo SA, Aronoff-Spencer E."
  },
  {
    "pmid": "30910517",
    "year": 2019,
    "journal": "Am J Ophthalmol",
    "title": "Time Requirements of Paper-Based Clinical Workflows and After-Hours Documentation in a Multispecialty Academic Ophthalmology Practice",
    "authors": "Baxter SL, Gali HE, Huang AE, <b>Millen M</b>, <b>El-Kareh R</b>, Nudleman E, Robbins SL, Heichel CWD, Camp AS, Korn BS, Lee JE, Kikkawa DO, Longhurst CA, Chiang MF, Hribar MR, Ohno-Machado L."
  },
  {
    "pmid": "30240357",
    "year": 2018,
    "journal": "Diagnosis (Berl)",
    "title": "\"Closing the loop\": a mixed-methods study about resident learning from outcome feedback after patient handoffs",
    "authors": "Shenvi EC, Feupe SF, Yang H, <b>El-Kareh R</b>."
  },
  {
    "pmid": "29941007",
    "year": 2018,
    "journal": "Implement Sci",
    "title": "The GUIDES checklist: development of a tool to improve the successful use of guideline-based computerised clinical decision support",
    "authors": "Van de Velde S, Kunnamo I, Roshanov P, Kortteisto T, Aertgeerts B, Vandvik PO, Flottorp S; GUIDES expert panel."
  },
  {
    "pmid": "29378579",
    "year": 2018,
    "journal": "BMC Health Serv Res",
    "title": "Provider views on childhood obesity management in primary care settings: a mixed methods analysis",
    "authors": "Rhee KE, Kessl S, Lindback S, Littman M, <b>El-Kareh RE</b>."
  },
  {
    "pmid": "28592474",
    "year": 2017,
    "journal": "AACN Adv Crit Care",
    "title": "Implementing Intensive Care Unit Family-Centered Care: Resources to Identify and Address Gaps",
    "authors": "Hwang DY, <b>El-Kareh R</b>, Davidson JE."
  },
  {
    "pmid": "28545885",
    "year": 2017,
    "journal": "Am J Med",
    "title": "Evaluation of the Yale New Haven Readmission Risk Score for Pneumonia in a General Hospital Population",
    "authors": "Schaefer G, <b>El-Kareh R</b>, Quartarolo J, Seymann G."
  },
  {
    "pmid": "28442772",
    "year": 2017,
    "journal": "Sci Rep",
    "title": "Discriminative and Distinct Phenotyping by Constrained Tensor Factorization",
    "authors": "Kim Y, <b>El-Kareh R</b>, Sun J, Yu H, Jiang X."
  },
  {
    "pmid": "28323114",
    "year": 2017,
    "journal": "J Biomed Inform",
    "title": "Physician activity during outpatient visits and subjective workload",
    "authors": "Calvitti A, Hochheiser H, Ashfaq S, Bell K, Chen Y, <b>El Kareh R</b>, Gabuzda MT, Liu L, Mortensen S, Pandey B, Rick S, Street RL Jr, Weibel N, Weir C, Agha Z."
  },
  {
    "pmid": "28207198",
    "year": 2017,
    "journal": "Wiley Interdiscip Rev Syst Biol Med",
    "title": "Integrated precision medicine: the role of electronic health records in delivering personalized treatment",
    "authors": "<b>Sitapati A</b>, Kim H, Berkovich B, Marmor R, Singh S, <b>El-Kareh R</b>, <b>Clay B</b>, Ohno-Machado L."
  },
  {
    "pmid": "29540046",
    "year": 2016,
    "journal": "Diagnosis (Berl)",
    "title": "Methodologies for evaluating strategies to reduce diagnostic error: report from the research summit at the 7th International Diagnostic Error in Medicine Conference",
    "authors": "Bruce BB, <b>El-Kareh R</b>, Ely JW, Kanter MH, Rao G, Schiff GD, Ten Berg MJ, McDonald KM."
  },
  {
    "pmid": "26920366",
    "year": 2016,
    "journal": "Hosp Pediatr",
    "title": "Who's My Doctor? Using an Electronic Tool to Improve Team Member Identification on an Inpatient Pediatrics Team",
    "authors": "Singh A, Rhee KE, Brennan JJ, Kuelbs C, <b>El-Kareh R</b>, Fisher ES."
  },
  {
    "pmid": "26615182",
    "year": 2016,
    "journal": "J Am Med Inform Assoc",
    "title": "The impact of real-time alerting on appropriate prescribing in kidney disease: a cluster randomized controlled trial",
    "authors": "Awdishu L, Coates CR, Lyddane A, Tran K, Daniels CE, Lee J, <b>El-Kareh R</b>."
  },
  {
    "pmid": "26577421",
    "year": 2015,
    "journal": "J Innov Health Inform",
    "title": "Losing weights: Failure to recognize and act on weight loss documented in an electronic health record",
    "authors": "<b>El-Kareh R</b>, Pazo V, Wright A, Schiff GD."
  },
  {
    "pmid": "26142423",
    "year": 2015,
    "journal": "J Am Med Inform Assoc",
    "title": "A system to build distributed multivariate models and manage disparate data sharing policies: implementation in the scalable national network for effectiveness research",
    "authors": "Meeker D, Jiang X, Matheny ME, Farcas C, D'Arcy M, Pearlman L, Nookala L, Day ME, Kim KK, Kim H, Boxwala A, <b>El-Kareh R</b>, Kuo GM, Resnic FS, Kesselman C, Ohno-Machado L."
  },
  {
    "pmid": "23552437",
    "year": 2015,
    "journal": "Med Care",
    "title": "Predictive value of the present-on-admission indicator for hospital-acquired venous thromboembolism",
    "authors": "Khanna RR, Kim SB, Jenkins I, <b>El-Kareh R</b>, Afsarmanesh N, Amin A, Sand H, Auerbach A, Chia CY, Maynard G, Romano PS, White RH."
  },
  {
    "pmid": "22278302",
    "year": 2012,
    "journal": "J Gen Intern Med",
    "title": "Impact of automated alerts on follow-up of post-discharge microbiology results: a cluster randomized controlled trial",
    "authors": "<b>El-Kareh R</b>, Roy C, Williams DH, Poon EG."
  },
  {
    "pmid": "22210167",
    "year": 2012,
    "journal": "J Biomed Inform",
    "title": "An approach to improve LOINC mapping through augmentation of local test names",
    "authors": "Kim H, <b>El-Kareh R</b>, Goel A, Vineet FN, Chapman WW."
  },
  {
    "pmid": "22081224",
    "year": 2012,
    "journal": "J Am Med Inform Assoc",
    "title": "iDASH: integrating data for analysis, anonymization, and sharing",
    "authors": "Ohno-Machado L, Bafna V, Boxwala AA, Chapman BE, Chapman WW, Chaudhuri K, Day ME, Farcas C, Heintzman ND, Jiang X, Kim H, Kim J, Matheny ME, Resnic FS, Vinterbo SA; iDASH team."
  },
  {
    "pmid": "22195118",
    "year": 2011,
    "journal": "AMIA Annu Symp Proc",
    "title": "Improving predictions in imbalanced data using Pairwise Expanded Logistic Regression",
    "authors": "Jiang X, <b>El-Kareh R</b>, Ohno-Machado L."
  },
  {
    "pmid": "21661103",
    "year": 2011,
    "journal": "J Hosp Med",
    "title": "Incidence and predictors of microbiology results returning postdischarge and requiring follow-up",
    "authors": "<b>El-Kareh R</b>, Roy C, Brodsky G, Perencevich M, Poon EG."
  },
  {
    "pmid": "21278102",
    "year": 2011,
    "journal": "J Am Med Inform Assoc",
    "title": "Actionable reminders did not improve performance over passive reminders for overdue tests in the primary care setting",
    "authors": "<b>El-Kareh RE</b>, Gandhi TK, Poon EG, Newmark LP, Ungar J, Orav EJ, Sequist TD."
  },
  {
    "pmid": "19156468",
    "year": 2009,
    "journal": "J Gen Intern Med",
    "title": "Trends in primary care clinician perceptions of a new electronic health record",
    "authors": "<b>El-Kareh R</b>, Gandhi TK, Poon EG, Newmark LP, Ungar J, Lipsitz S, Sequist TD."
  },
  {
    "pmid": "18999207",
    "year": 2008,
    "journal": "AMIA Annu Symp Proc",
    "title": "Trends in clinician perceptions of a new electronic health record",
    "authors": "<b>El-Kareh R</b>, Gandhi T, Poon EG, Newmark LP, Ungar J, Lipsitz S, Sequist T."
  }
];
