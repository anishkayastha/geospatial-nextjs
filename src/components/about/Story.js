'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import img1 from "../../../public/images/img-square-1-min.jpg";
import img2 from "../../../public/images/img-square-2-min.jpg";
import img3 from "../../../public/images/img-square-3-min.jpg";
import img4 from "../../../public/images/img-square-4-min.jpg";
import img5 from "../../../public/images/img-square-5-min.jpg";

import post1 from "../../../public/images/post-1-min.jpg";
import post2 from "../../../public/images/post-2-min.jpg";

const storyContent = {
    column1: {
        imgs: [
            {
                img: img5,
                alt: "Team brainstorming",
                width: 1188,
                height: 1413,
                tailwindClass: "h-56 lg:h-96"
            },
            {
                img: img1,
                alt: "Woman making a plan",
                width: 1188,
                height: 1413,
            },
        ]
    },
    column2: {
        imgs: [
            {
                img: img2,
                alt: "Team meeting",
                width: 1188,
                height: 1413,
                tailwindClass: "h-48 lg:h-64"
            },
            {
                img: post2,
                alt: "White curvy building",
                width: 1188,
                height: 1413,
                tailwindClass: "h-56 lg:h-64"
            },
            {
                img: img4,
                alt: "White curvy building",
                width: 1188,
                height: 1413,
                tailwindClass: "h-48 lg:h-96"
            },
        ]
    },
    column3: {
        imgs: [
            {
                img: post1,
                alt: "Building",
                width: 1188,
                height: 1413,
            },
            {
                img: img3,
                alt: "Man writting a plan",
                width: 1188,
                height: 1413,
            },
        ]
    },
    storyText: {
        heading: "Empowering Tomorrow's World with Geospatial Solutions",
        p1: "At the heart of our GIS journey is a tale of innovation and commitment. Born from the vision of passionate professionals, we've evolved into a dynamic force, seamlessly blending technological expertise with an artistic grasp of spatial dynamics. From foundational projects that sparked our journey to landmark solutions defining our legacy, each step resonates with a fervor for groundbreaking geospatial innovation. Today, GeoSpatial Systems Pvt. Ltd. stands as a trailblazer in Nepal, the first joint venture company of its kind, committed to global standards in Geographical Information Systems (GIS).",
        p2: "Established in July 1997, GeoSpatial Systems is the brainchild of visionary Nepalese promoters and the support of Nakanihon Air Co., Ltd. (NNK), a renowned Japanese Air Survey Company. As active members of the Computer Association of Nepal (CAN) and associate members of the Federation of Nepalese Chamber of Commerce and Industry (FNCCI), our diverse team of professionals is equipped with cutting-edge technology. With over 100 workstations and a robust infrastructure connecting us to the world, we invite you to join us in shaping a future where geospatial excellence transforms data into informed decisions and innovative solutions. Welcome to GeoSpatial Systems, where we craft geospatial vistas today to shape the landscapes of tomorrow.",
        signature: "/images/Bill_Smith_Signature.svg",
        name: "Suresh Shrestha",
        roleTitle: "MD and Founder"
    }
}

const Story = ({ className }) => {
    return (
        <section className={`{className}`}>
            <div className='container px-4 mx-auto'>
                <div className='md:flex w-full md:w-10/12 mx-auto items-stretch md:gap-7'>
                    <div className='md:w-4/12 self-center space-y-7 mb-7 md:mb-0'>
                        {storyContent.column1.imgs.map((item, idx) => {
                            idx *= 0.5;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: idx,
                                            duration: 0.5,
                                        }
                                    }}
                                    viewport={{ once: true }}
                                    key={item}
                                >
                                    <Image src={item.img} width={item.width} height={item.height} alt={item.alt} className={`${item.tailwindClass ? item.tailwindClass : ""} !max-w-full object-cover object-center`} />

                                </motion.div>
                            )
                        })}
                    </div>

                    <div className='md:w-4/12 space-y-7 mb-7 md:mb-0'>
                        {storyContent.column2.imgs.map((item, idx) => {
                            idx *= 0.5;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: idx,
                                            duration: 0.5,
                                        }
                                    }}
                                    viewport={{ once: true }}
                                    key={item}
                                >
                                    <Image src={item.img} width={item.width} height={item.height} alt={item.alt} className={`${item.tailwindClass ? item.tailwindClass : ""} !max-w-full object-cover object-center`} />

                                </motion.div>
                            )
                        })}
                    </div>

                    <div className='md:w-4/12 self-center space-y-7 md:mb-0'>
                        {storyContent.column3.imgs.map((item, idx) => {
                            idx *= 0.5;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: idx,
                                            duration: 0.5,
                                        }
                                    }}
                                    viewport={{ once: true }}
                                    key={item}
                                >
                                    <Image src={item.img} width={item.width} height={item.height} alt={item.alt} className={`${item.tailwindClass ? item.tailwindClass : ""} !max-w-full object-cover object-center`} />

                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.8,
                            duration: 0.5
                        }
                    }}
                    viewport={{ once: true }}
                    className='lg:flex flex-col mt-32 text-left w-full lg:w-6/12 mx-auto'>
                    {storyContent.storyText.heading && (
                        <h2 className='text-2xl md:text-3xl text-gray-800 mb-5'>
                            {storyContent.storyText.heading}
                        </h2>
                    )}

                    {storyContent.storyText.p1 && (
                        <p className='leading-relaxed text-gray-500 mb-7'>
                            {storyContent.storyText.p1}
                        </p>
                    )}
                    {storyContent.storyText.p2 && (
                        <p className='leading-relaxed text-gray-500 mb-10'>
                            {storyContent.storyText.p2}
                        </p>
                    )}

                    <p>
                        <Image src={storyContent.storyText.signature}
                            alt={storyContent.storyText.name}
                            width={338}
                            height={113}
                            className='w-48 block mb-2' />
                        <strong className='block mb-2 text-gray-800 font-medium'>
                            {storyContent.storyText.name + " "}
                            <span className='text-gray-400'>
                                {storyContent.storyText.roleTitle}
                            </span>
                        </strong>
                    </p>

                </motion.div>
            </div>
        </section>
    )
}

export default Story