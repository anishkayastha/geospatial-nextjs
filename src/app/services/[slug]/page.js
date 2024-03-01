import { allServices } from 'contentlayer/generated';
import ServiceContent from './ServiceContent';

export async function generateStaticParams() {
    const services = await allServices;

    return services.map((service) => ({ slug: service.slug }));
}

export const generateMetadata = async ({ params }) => {
    const service = allServices.find((service) => service._raw.flattenedPath === 'service/' + params.slug);

    return { title: service?.title, excerpt: service?.excerpt };
};

const serviceLayout = ({ params }) => {
    const service = allServices.find((service) => service._raw.flattenedPath === 'services/' + params.slug);

    return (
        <>
            <ServiceContent service={service} />
        </>
    );
};

export default serviceLayout;