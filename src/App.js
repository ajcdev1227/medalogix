import {Nav, Timeline, Container, PulseModal} from "./components"
import {useState, useEffect, useRef} from "react";

const cardsInfo = [
    {
        title: "Referrals & Admissions",
        type: "Pulse",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 6C8.68622 6 5.99993 8.68629 5.99993 12C5.99993 15.3137 8.68622 18 11.9999 18C15.3136 18 17.9999 15.3137 17.9999 12C17.9999 8.68629 15.3136 6 11.9999 6ZM4.99993 12C4.99993 8.13401 8.13394 5 11.9999 5C15.8659 5 18.9999 8.13401 18.9999 12C18.9999 15.866 15.8659 19 11.9999 19C8.13394 19 4.99993 15.866 4.99993 12Z" fill="#A1CFC2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 4C7.58165 4 3.99993 7.58172 3.99993 12C3.99993 16.4183 7.58165 20 11.9999 20C16.4182 20 19.9999 16.4183 19.9999 12C19.9999 7.58172 16.4182 4 11.9999 4ZM2.99993 12C2.99993 7.02944 7.02937 3 11.9999 3C16.9705 3 20.9999 7.02944 20.9999 12C20.9999 16.9706 16.9705 21 11.9999 21C7.02937 21 2.99993 16.9706 2.99993 12Z" fill="#A1CFC2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0205 18.6018C20.6063 18.016 21.556 18.016 22.1418 18.6018L28.3519 24.8119C28.9377 25.3977 28.9377 26.3474 28.3519 26.9332L27.4062 27.879C26.8204 28.4647 25.8706 28.4647 25.2848 27.879L19.0748 21.6689C18.489 21.0831 18.489 20.1333 19.0748 19.5476L20.0205 18.6018ZM21.4347 19.3089C21.2395 19.1136 20.9229 19.1136 20.7276 19.3089L19.7819 20.2547C19.5866 20.4499 19.5866 20.7665 19.7819 20.9618L25.9919 27.1719C26.1872 27.3671 26.5038 27.3671 26.6991 27.1719L27.6448 26.2261C27.8401 26.0308 27.8401 25.7143 27.6448 25.519L21.4347 19.3089Z" fill="#A1CFC2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2254 17.027C18.6159 16.6365 19.2491 16.6365 19.6396 17.027L20.609 17.9964C20.9995 18.3869 20.9995 19.0201 20.609 19.4106L19.8836 20.136C19.493 20.5266 18.8599 20.5266 18.4694 20.136L17.4999 19.1666C17.1094 18.7761 17.1094 18.1429 17.4999 17.7524L18.2254 17.027ZM19.9019 18.7035L18.9325 17.7341L18.2071 18.4595L19.1765 19.4289L19.9019 18.7035Z" fill="#A1CFC2"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99993 9C9.99993 8.44771 10.4476 8 10.9999 8H12.9999C13.5522 8 13.9999 8.44772 13.9999 9V10H14.9999C15.5522 10 15.9999 10.4477 15.9999 11V13C15.9999 13.5523 15.5522 14 14.9999 14H13.9999V15C13.9999 15.5523 13.5522 16 12.9999 16H10.9999C10.4476 16 9.99993 15.5523 9.99993 15L9.99993 14H8.99993C8.44765 14 7.99993 13.5523 7.99993 13V11C7.99993 10.4477 8.44765 10 8.99993 10L9.99993 10L9.99993 9ZM12.9999 9L10.9999 9L10.9999 10.25C10.9999 10.6642 10.6641 11 10.2499 11H8.99993V13H10.2499C10.6641 13 10.9999 13.3358 10.9999 13.75V15L12.9999 15V13.75C12.9999 13.3358 13.3357 13 13.7499 13H14.9999V11H13.7499C13.3357 11 12.9999 10.6642 12.9999 10.25V9Z" fill="#A1CFC2"/>
                </svg>`,
        cardInfo: [
            {
                src: "./assets/images/img1-1.png",
                title: "Patient Referral Received"
            },
            {
                src: "./assets/images/img1-2.png",
                title: "Patient Admission is Pending"
            },
            {
                src: "./assets/images/img1-3.png",
                title: "Patient Plan of Care Development "
            }
        ]
    },
    {
        title: "Episodes",
        type: "Pulse",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M27.1193 5.75973C27.0248 5.66817 26.9043 5.60798 26.7743 5.58737C26.6444 5.56675 26.5112 5.58671 26.3929 5.64453H20.5561C20.3864 5.64453 20.2236 5.71196 20.1036 5.83198C19.9836 5.95201 19.9161 6.11479 19.9161 6.28453C19.9161 6.45427 19.9836 6.61706 20.1036 6.73708C20.2236 6.8571 20.3864 6.92453 20.5561 6.92453H25.0873L17.1097 15.1325L11.5193 11.2221C11.3921 11.1333 11.2369 11.0938 11.0827 11.1109C10.9285 11.1279 10.7857 11.2005 10.6809 11.3149L4.85375 17.6605C4.7968 17.7225 4.75263 17.7951 4.72374 17.8742C4.69486 17.9532 4.68182 18.0372 4.68539 18.1213C4.69259 18.2911 4.76696 18.4511 4.89215 18.5661C5.01733 18.6811 5.18307 18.7417 5.3529 18.7345C5.52273 18.7273 5.68275 18.6529 5.79775 18.5277L11.2377 12.5917L16.8185 16.4957C16.9429 16.583 17.0942 16.6232 17.2455 16.6091C17.3967 16.595 17.538 16.5276 17.6441 16.4189L26.0281 7.80453V12.4125C26.0281 12.5823 26.0956 12.7451 26.2156 12.8651C26.3356 12.9851 26.4984 13.0525 26.6681 13.0525C26.8379 13.0525 27.0007 12.9851 27.1207 12.8651C27.2407 12.7451 27.3081 12.5823 27.3081 12.4125V6.30373C27.3214 6.20461 27.3112 6.10377 27.2784 6.0093C27.2456 5.91483 27.1911 5.82935 27.1193 5.75973Z" fill="#1A869C"/>
                <path d="M27.3111 25.7755V15.8107C27.3111 15.6409 27.2437 15.4781 27.1237 15.3581C27.0037 15.2381 26.8409 15.1707 26.6711 15.1707C26.5014 15.1707 26.3386 15.2381 26.2186 15.3581C26.0986 15.4781 26.0311 15.6409 26.0311 15.8107V25.7755C26.0311 25.9452 26.0986 26.108 26.2186 26.228C26.3386 26.348 26.5014 26.4155 26.6711 26.4155C26.8409 26.4155 27.0037 26.348 27.1237 26.228C27.2437 26.108 27.3111 25.9452 27.3111 25.7755Z" fill="#1A869C"/>
                <path d="M20.7799 25.7754V18.4154C20.7799 18.2457 20.7124 18.0829 20.5924 17.9628C20.4724 17.8428 20.3096 17.7754 20.1399 17.7754C19.9701 17.7754 19.8074 17.8428 19.6873 17.9628C19.5673 18.0829 19.4999 18.2457 19.4999 18.4154V25.7754C19.4999 25.9451 19.5673 26.1079 19.6873 26.2279C19.8074 26.348 19.9701 26.4154 20.1399 26.4154C20.3096 26.4154 20.4724 26.348 20.5924 26.2279C20.7124 26.1079 20.7799 25.9451 20.7799 25.7754Z" fill="#1A869C"/>
                <path d="M14.2461 25.7759V22.1439C14.2461 21.9742 14.1786 21.8114 14.0586 21.6914C13.9386 21.5713 13.7758 21.5039 13.6061 21.5039C13.4363 21.5039 13.2735 21.5713 13.1535 21.6914C13.0335 21.8114 12.9661 21.9742 12.9661 22.1439V25.7759C12.9661 25.9456 13.0335 26.1084 13.1535 26.2285C13.2735 26.3485 13.4363 26.4159 13.6061 26.4159C13.7758 26.4159 13.9386 26.3485 14.0586 26.2285C14.1786 26.1084 14.2461 25.9456 14.2461 25.7759Z" fill="#1A869C"/>
                <path d="M7.71091 25.7757V21.4173C7.71091 21.2476 7.64348 21.0848 7.52346 20.9648C7.40343 20.8448 7.24065 20.7773 7.07091 20.7773C6.90117 20.7773 6.73838 20.8448 6.61836 20.9648C6.49834 21.0848 6.43091 21.2476 6.43091 21.4173V25.7757C6.43091 25.9455 6.49834 26.1083 6.61836 26.2283C6.73838 26.3483 6.90117 26.4157 7.07091 26.4157C7.24065 26.4157 7.40343 26.3483 7.52346 26.2283C7.64348 26.1083 7.71091 25.9455 7.71091 25.7757Z" fill="#1A869C"/>
               </svg>`,
        cardInfo: [
            {
                src: "./assets/images/img2-1.png",
                title: "The Patient's Condition Worsens"
            },
            {
                src: "./assets/images/img2-2.png",
                title: "The Patient's Condition Significantly Improves"
            },
            {
                src: "./assets/images/img2-3.png",
                title: "End of Episode Plan of Care Review"
            }
        ]
    },
    {
        title: "Transitions",
        type: "Pulse",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.7834 7.42458C23.5709 4.21207 18.3624 4.21206 15.1499 7.42457L8.69956 13.8749C8.59239 13.9821 8.59239 14.1558 8.69956 14.263C9.98972 15.5531 12.0815 15.5531 13.3716 14.263L14.751 12.8837C15.2891 12.3456 16.1615 12.3456 16.6996 12.8837C17.9897 14.1738 20.0815 14.1738 21.3717 12.8837L21.4041 12.8512C21.6196 12.6358 21.9689 12.6358 22.1844 12.8512C22.3998 13.0667 22.3998 13.416 22.1844 13.6315L22.1519 13.6639C20.4308 15.385 17.6404 15.385 15.9193 13.6639C15.8121 13.5568 15.6384 13.5568 15.5312 13.6639L14.1519 15.0432C13.3331 15.862 12.2724 16.2912 11.1999 16.331C11.1844 16.3516 11.1673 16.3714 11.1485 16.3901L7.31115 20.2271C7.31115 20.2271 7.31114 20.2271 7.31113 20.2271C6.90335 20.6349 6.90336 21.2961 7.31115 21.7039C7.70591 22.0986 8.34135 22.1131 8.75363 21.7366L8.75365 21.7366L13.9726 16.9718C14.079 16.8747 14.2131 16.827 14.3467 16.8276C14.4875 16.8278 14.6282 16.8817 14.7357 16.9891C14.9511 17.2046 14.9511 17.5539 14.7357 17.7694L9.79522 22.7099C9.38742 23.1177 9.38742 23.7788 9.79522 24.1866C10.19 24.5814 10.8254 24.5958 11.2377 24.2194L11.2377 24.2194L16.4567 19.4546C16.6781 19.2524 17.0205 19.2641 17.2276 19.4809C17.4347 19.6976 17.4309 20.0402 17.2188 20.2522L12.2784 25.1926C11.8706 25.6004 11.8706 26.2616 12.2784 26.6694C12.6731 27.0641 13.3086 27.0786 13.7209 26.7022L18.9395 21.9374C19.1609 21.7352 19.5032 21.7469 19.7104 21.9636C19.9175 22.1804 19.9136 22.5229 19.7016 22.7349L14.874 27.5625C14.4039 28.0326 14.4039 28.7949 14.874 29.265C15.3441 29.7351 16.1064 29.7351 16.5765 29.265L26.7834 19.0581C29.9959 15.8456 29.9959 10.6371 26.7834 7.42458ZM8.41726 23.0817C7.75107 23.1969 7.04265 22.9959 6.5309 22.4841C5.69217 21.6454 5.69217 20.2856 6.5309 19.4468L6.53092 19.4468L9.81546 16.1626C9.12118 15.9633 8.46625 15.5902 7.91931 15.0432C7.38121 14.5051 7.38121 13.6327 7.91931 13.0946L14.3696 6.64431C18.0131 3.00088 23.9202 3.00089 27.5637 6.64433C31.2071 10.2878 31.2071 16.1949 27.5637 19.8384L17.3568 30.0453C16.4557 30.9463 14.9948 30.9463 14.0938 30.0453C13.5465 29.4981 13.3316 28.7444 13.4491 28.035C12.7644 28.1751 12.0265 27.978 11.4981 27.4496C10.9852 26.9367 10.786 26.2289 10.9004 25.5646C10.2345 25.6794 9.52648 25.4784 9.01496 24.9669C8.502 24.4539 8.30276 23.746 8.41726 23.0817Z" fill="#007991"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.02355 6.50635C7.13374 3.39616 12.1764 3.39616 15.2866 6.50635C15.502 6.72181 15.502 7.07115 15.2866 7.28661C15.0711 7.50207 14.7218 7.50207 14.5063 7.28661C11.827 4.60734 7.48307 4.60734 4.8038 7.28661L4.25208 7.83833C1.2681 10.8223 1.2681 15.6603 4.25208 18.6443L6.73484 21.127C6.9503 21.3425 6.9503 21.6918 6.73484 21.9073C6.51938 22.1228 6.17004 22.1228 5.95458 21.9073L3.47182 19.4245C0.0569187 16.0096 0.0569182 10.473 3.47182 7.05808L4.02355 6.50635Z" fill="#007991"/>
               </svg>`,
        cardInfo: [
            {
                src: "./assets/images/img3-1.png",
                title: "Patient Would Be Better Served by Hospice Care"
            },
            {
                src: "./assets/images/img3-2.png",
                title: "There Are Questions About the Patient's Fit for Hospice Care"
            }
        ]
    },
    {
        title: "Muse",
        type: "Muse",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M27.1193 5.75973C27.0248 5.66817 26.9043 5.60798 26.7743 5.58737C26.6444 5.56675 26.5112 5.58671 26.3929 5.64453H20.5561C20.3864 5.64453 20.2236 5.71196 20.1036 5.83198C19.9836 5.95201 19.9161 6.11479 19.9161 6.28453C19.9161 6.45427 19.9836 6.61706 20.1036 6.73708C20.2236 6.8571 20.3864 6.92453 20.5561 6.92453H25.0873L17.1097 15.1325L11.5193 11.2221C11.3921 11.1333 11.2369 11.0938 11.0827 11.1109C10.9285 11.1279 10.7857 11.2005 10.6809 11.3149L4.85375 17.6605C4.7968 17.7225 4.75263 17.7951 4.72374 17.8742C4.69486 17.9532 4.68182 18.0372 4.68539 18.1213C4.69259 18.2911 4.76696 18.4511 4.89215 18.5661C5.01733 18.6811 5.18307 18.7417 5.3529 18.7345C5.52273 18.7273 5.68275 18.6529 5.79775 18.5277L11.2377 12.5917L16.8185 16.4957C16.9429 16.583 17.0942 16.6232 17.2455 16.6091C17.3967 16.595 17.538 16.5276 17.6441 16.4189L26.0281 7.80453V12.4125C26.0281 12.5823 26.0956 12.7451 26.2156 12.8651C26.3356 12.9851 26.4984 13.0525 26.6681 13.0525C26.8379 13.0525 27.0007 12.9851 27.1207 12.8651C27.2407 12.7451 27.3081 12.5823 27.3081 12.4125V6.30373C27.3214 6.20461 27.3112 6.10377 27.2784 6.0093C27.2456 5.91483 27.1911 5.82935 27.1193 5.75973Z" fill="#1A869C"/>
                <path d="M27.3111 25.7755V15.8107C27.3111 15.6409 27.2437 15.4781 27.1237 15.3581C27.0037 15.2381 26.8409 15.1707 26.6711 15.1707C26.5014 15.1707 26.3386 15.2381 26.2186 15.3581C26.0986 15.4781 26.0311 15.6409 26.0311 15.8107V25.7755C26.0311 25.9452 26.0986 26.108 26.2186 26.228C26.3386 26.348 26.5014 26.4155 26.6711 26.4155C26.8409 26.4155 27.0037 26.348 27.1237 26.228C27.2437 26.108 27.3111 25.9452 27.3111 25.7755Z" fill="#1A869C"/>
                <path d="M20.7799 25.7754V18.4154C20.7799 18.2457 20.7124 18.0829 20.5924 17.9628C20.4724 17.8428 20.3096 17.7754 20.1399 17.7754C19.9701 17.7754 19.8074 17.8428 19.6873 17.9628C19.5673 18.0829 19.4999 18.2457 19.4999 18.4154V25.7754C19.4999 25.9451 19.5673 26.1079 19.6873 26.2279C19.8074 26.348 19.9701 26.4154 20.1399 26.4154C20.3096 26.4154 20.4724 26.348 20.5924 26.2279C20.7124 26.1079 20.7799 25.9451 20.7799 25.7754Z" fill="#1A869C"/>
                <path d="M14.2461 25.7759V22.1439C14.2461 21.9742 14.1786 21.8114 14.0586 21.6914C13.9386 21.5713 13.7758 21.5039 13.6061 21.5039C13.4363 21.5039 13.2735 21.5713 13.1535 21.6914C13.0335 21.8114 12.9661 21.9742 12.9661 22.1439V25.7759C12.9661 25.9456 13.0335 26.1084 13.1535 26.2285C13.2735 26.3485 13.4363 26.4159 13.6061 26.4159C13.7758 26.4159 13.9386 26.3485 14.0586 26.2285C14.1786 26.1084 14.2461 25.9456 14.2461 25.7759Z" fill="#1A869C"/>
                <path d="M7.71091 25.7757V21.4173C7.71091 21.2476 7.64348 21.0848 7.52346 20.9648C7.40343 20.8448 7.24065 20.7773 7.07091 20.7773C6.90117 20.7773 6.73838 20.8448 6.61836 20.9648C6.49834 21.0848 6.43091 21.2476 6.43091 21.4173V25.7757C6.43091 25.9455 6.49834 26.1083 6.61836 26.2283C6.73838 26.3483 6.90117 26.4157 7.07091 26.4157C7.24065 26.4157 7.40343 26.3483 7.52346 26.2283C7.64348 26.1083 7.71091 25.9455 7.71091 25.7757Z" fill="#1A869C"/>
               </svg>`,
        cardInfo: [
            {
                src: "./assets/images/img4-1.png",
                title: "Patient Considering Hospice Revocation"
            },
            {
                src: "./assets/images/img4-2.png",
                title: "Patient Experiences a Sudden Decline in Condition (SDiC)"
            },
            {
                src: "./assets/images/img4-3.png",
                title: "Patient Enters Final Days of Life"
            }
        ]
    }
]

const modalProperty = {
    color: [
        '#A1CFC2',
        '#007991',
        '#9BC418',
        '#1A2141'
    ],
    contentTitle: [
        "Pulse R & A",
        "Pulse Episodes",
        "Pulse Transitions",
        "Muse"
    ],
    challenges: [
        [
            [
                "Intake teams can easily miss patient data due to lengthy, complex referral records.",
                "Admitting clinicians are often underprepared for their first visit because it’s difficult to thoroughly review referral packets."
            ],
            [
                "Patients spend too much time in pending status and must deal with uncertainty and longer times to admission.",
                "Due to capacity constraints and low admission rates, acute care settings are sending out about 6 referrals per patient."
            ],
            [
                "Conflicts between different clinical documents go unnoticed and care planning takes place based on incomplete or inaccurate information.",
                "The patient starts their home health experience at a disadvantage with a care plan that will require adjustments for the right level of care."
            ]
        ],
        [
            [
                "Care teams can miss clinical trends that would require updated care plans and fail to address negative changes in condition.",
                "Patients receive care based on outdated information, making hospitalizations more likely as real-time needs aren’t met.",
                "When care levels don’t align with acuity, agencies can be penalized with a Low Utilization Payment Adjustment (LUPA)"
            ],
            [
                "Agencies must rely on untargeted, standardized scheduling that causes overutilization and provider burnout.",
                "Agencies can struggle to find additional resources for higher-risk patients, leading to cascading care alignment problems."
            ],
            [
                "During the patient’s case conference, care teams can overlook clinical evidence that indicates recertification would be appropriate.",
                "Patients can be discharged to their community too early, which will raise their risk for subsequent hospitalization or readmission to home health care."
            ]
        ],
        [
            [
                "Patient volume, limited technologies, and other factors lead agencies to miss changes in patient condition that make hospice care more appropriate.",
                "Patients aren’t made aware of their care options or educated on hospice.",
                "Patients with high mortality risk remain in home health, not being cared for appropriately and stretching resources."
            ],
            [
                "Some patients who should be moving to hospice are spending too much time being evaluated by siloed teams with outdated tools that limit efficient patient status decisions.",
                "Decisions made by transition navigators aren’t transparent to clinical managers, which can lead to conflict."
            ]
        ],
        [
            [
                "Lack of clarity about a prognosis, caregiver burdens, and other issues can lead patients to revoke hospice care. This may unintentionally put them in a less appropriate care environment.",
                "It can be difficult to consistently understand every patient’s risk trajectory without help, but hospice agencies with high revocation rates are impacted in quality metrics, revenue, and audit risk."
            ],
            [
                "Care teams can miss trends in clinical data that indicate the need for a Plan of Care change and fail to address negative movement in patient condition.",
                "Because of this, patients can experience a level of care based on outdated information that doesn’t address their needs."
            ],
            [
                "Signs of high mortality risk aren’t always readily apparent, and finding clinical evidence manually is difficult across a large census.",
                "Patients who enter their final days of life without care increases won’t receive appropriate support, leading to a worse experience patients and poorer quality results for agencies."
            ]
        ]
    ],
    nonChallenges: [
        [
            {
                src: "./assets/gifs/R&A-ReferralSummaryReview.gif",
                contents: [
                    "The referral packet is intelligently analyzed and converted into a single-page Referral Summary with diagnostic insights for review.",
                    "Admitting clinicians can review patient data much more effectively for engaging, well-prepared visits that create a better patient experience."
                ]
            },
            {
                src: "./assets/gifs/R&A - Pending Reason Sticky Note.gif",
                contents: [
                    "Intake teams are able to use Sticky Notes and EMR connectivity to quickly understand and act on pending admissions.",
                    "The patient experiences quicker admission time with less worry and better-informed providers."
                ]
            },
            {
                src: "./assets/gifs/R&A - AI Insight.gif",
                contents: [
                    "The Admission Summary highlights conflicting and supporting clinical evidence across clinical notes, referral documents, and OASIS.",
                    "Care teams receive smart insights for clinical documentation improvement, starting the patient off on the right foot with a more accurate Plan of Care",
                    "Coding and reimbursements are more accurate to the patient’s condition and level of care provided."
                ]
            }
        ],
        [
            {
                src: "./assets/gifs/Episodes - Initial Visit Check.gif",
                contents: [
                    "Breakthrough predictive analytics drive higher responsiveness to changes in patient condition as trends are compared against a broad data set to predict needed Plan of Care updates.",
                    "Patients experience care that is consistently adjusted to their condition, avoiding hospitalizations in cases where they may otherwise have happened.",
                    "Having provided the appropriate level of care relative to the patient’s condition, the agency is fully compensated for the episode."
                ]
            },
            {
                src:"./assets/gifs/Proactively addressing.png",
                contents: [
                    "Provides visit-by-visit insights into patients whose utilization isn’t aligned to their risk profile, driving clinician action to balance the scale.",
                    "Agencies are able to reallocate care resources with confidence that patients are still receiving appropriate care."
                ]
            },
            {
                src: "./assets/gifs/Proactively addressing.png",
                contents: [
                    "Intelligently surfaces clinical insights to facilitate end-of-episode care decisions, improving continuity of care for those patients best served by staying in home health.",
                    "Patients have higher confidence that decisions about their care are rooted in clinical evidence and if they’re discharged, it’s for good reason.",
                    "Evaluated patients who were discharged from agencies using Pulse were on average more likely to remain in community, with less disruption to their lives."
                ]
            }
        ],
        [
            {
                src: "./assets/gifs/Hospice Evaluations.gif",
                contents: [
                    "Proprietary data science surfaces patients whose condition make them more likely to pass away in the next 60 days. Recommendations and supporting evidence are given.",
                    "Care teams can move quickly and confidently through the transition evaluation workflow, prioritizing decisions by risk and helping patients move earlier.",
                    "Patients spend more appropriate amounts of time in hospice, receiving with their family improved care as they near death.",
                    "More home health resources are freed up as high-utilization patients move to hospice."
                ]
            },
            {
                src:"./assets/gifs/Transitions Notes.gif",
                contents: [
                    "Transitions brings transition navigators and clinical managers together with transparent hospice evaluation workflows and the ability to exchange notes between teams and into the EMR.",
                    "Patients spend less time in limbo, and clinicians can use surfaced clinical insights to better substantiate decisions to patients for greater peace of mind."
                ]
            }
        ],
        [
            {
                src:"./assets/gifs/Proactively addressing.png",
                contents: [
                    "Applying breakthrough data science models, Muse identifies patients who are 5x more likely to revoke hospice care within 30 days and recommends action for hospice teams.",
                    "Because care teams can add a tuck in call, education, volunteer services, and other resources, patients feel better supported in and prepared for their hospice journey."
                ]
            },
            {
                src:"./assets/gifs/Proactively addressing.png",
                contents: [
                    "Predictive analytics help providers respond to changes in patient condition with evidence-based utilization recommendations.",
                    "Patients experience care that is consistently adjusted to their condition, preventing gaps in care",
                    "Agencies are compensated for increased care that is clinically supported through additional SIA units."
                ]
            },
            {
                src: "./assets/gifs/Proactively addressing.png",
                contents: [
                    "Muse helps identify patients who are more likely to pass away, and ensures additional resources are allocated to fully support them.",
                    "On average, Muse clients perform 45.5% better on HVLDL than the national benchmark, with improvements as high as 89% more patients meeting HVLDL visits. Clients like Amedisys, Avow, Bayada, Knute Nelson, and others have found great success with Muse"
                ]
            }
        ]
    ],
}

function App() {
    const setTranslateXRef = useRef(null);
    const [curIndex, setCurIndex] = useState(0);
    const [curSubIndex, setCurSubIndex] = useState(0);
    const [modalShow, setModalShow] = useState(false);

    const setTranslatePosition = (position) => {
        if (setTranslateXRef.current) {
            setTranslateXRef.current(position);
        }
    };

    return (
        <div className="flex flex-col justify-between h-full w-full">
            <Nav/>
            <div className="flex flex-col justify-center mt-[78px] h-full">
                <Container
                    cardsInfo={cardsInfo}
                    curIndex={curIndex}
                    curSubIndex={curSubIndex}
                    setCurIndex={setCurIndex}
                    setCurSubIndex={setCurSubIndex}
                    setModalShow={setModalShow}
                    ref={setTranslateXRef}
                />
                <Timeline
                    cardsInfo={cardsInfo}
                    curIndex={curIndex}
                    curSubIndex={curSubIndex}
                    setCurIndex={setCurIndex}
                    setCurSubIndex={setCurSubIndex}
                    setTranslatePosition={setTranslatePosition}
                />
            </div>
            {modalShow && (
                <PulseModal
                    icon={cardsInfo[curIndex].icon}
                    title={cardsInfo[curIndex].title}
                    subTitle={cardsInfo[curIndex].cardInfo[curSubIndex].title}
                    setModalShow={setModalShow}
                    curIndex={curIndex}
                    curSubIndex={curSubIndex}
                    modalProperty={modalProperty}
                />
            )}

        </div>
    );
}

export default App;
