'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PostCard = ({service, index}) => {
    index *= 0.05;
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: index,
                        duration: 0.3
                    }
                }}
                viewport={{ once: true }}
                className={`relative overflow-hidden`}
            >

                <Link href={service.url} className="relative block overflow-hiddden group">
                    <Image
                        src={service.image}
                        alt={service.title}
                        width={1064}
                        height={644}
                        className='object-cover object-center h-[400px] !max-w-full duration-300 transition-all ease-in-out group-hover:scale-[1.05]'
                    />
                </Link>

                <div className='py-8 px-2'>
                    <h3 className='mb-4'>
                        <Link href={service.url} className='text-2xl leading-none'>
                            {service.title}
                        </Link>
                    </h3>
                </div>

            </motion.div>
        </> 
  )
}

export default PostCard;