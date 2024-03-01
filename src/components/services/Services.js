"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { allServices } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import ReactPaginate from "react-paginate";

import { motion } from "framer-motion";

const Items = ({ currentItems }) => {
    return (
        <>
            {currentItems &&
                currentItems.map((service, index) => {
                    index *= 0.05;
                    return (
                        <motion.div
                            className="relative overflow-hidden w-full lg:w-6/12 p-2 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: index, duration: 0.3 },
                            }}
                            viewport={{ once: true }}
                            key={index}>
                            <Link
                                href={service.url}
                                className="overflow-hidden block relative">

                                <Image
                                    src={service.image}
                                    alt="joefreycodes.com"
                                    width={1064}
                                    height={644}
                                    className="object-cover object-center h-[400px] !max-w-full duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
                                />
                            </Link>
                            <div className="py-8 px-2">
                                <h3 className="mb-4">
                                    <Link href={service.url} className="text-2xl leading-none">
                                        {service.title}
                                    </Link>
                                </h3>
                            </div>
                        </motion.div>
                    );
                })}
        </>
    );
};

const Services = ({ className, itemsPerPage }) => {
    const items = allServices.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [clickPaginate, setclickPaginate] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));

        if (clickPaginate === true) {
            ref.current?.scrollIntoView({ top: -50, behavior: "smooth" });
            setclickPaginate(false);
        }
    }, [setCurrentItems, setPageCount, setclickPaginate, itemOffset, itemsPerPage, clickPaginate, ref]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;

        setclickPaginate(true);
        setItemOffset(newOffset);
    };
    
    if (!items) return null;
    return (
        <section className={`${className}`} ref={ref}>
            <div className="container px-4 mx-auto">
                <div className="lg:w-10/12 mx-auto flex flex-wrap mb-10">
                    <Items currentItems={currentItems} />
                </div>

                <div className="lg:w-10/12 mx-auto flex flex-wrap">
                    <ReactPaginate
                        nextLabel="Next"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="Previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;