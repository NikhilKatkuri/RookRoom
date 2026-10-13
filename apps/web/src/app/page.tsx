import Layout from '@/components/Layout';
import LightRays from '@/components/ui/light-rays';

export default function Home() {
    return (
        <Layout highlightedBackground={<LightRays />}>
            <section className="relative w-full overflow-hidden pb-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="pt-44">
                        <p className="text-3xl leading-10 font-semibold text-white/80 md:my-4 md:text-5xl md:leading-16 lg:my-6 lg:text-[64px] lg:leading-20.5">
                            Play Chess Instantly with <br />
                            Anyone, Anywhere.
                        </p>
                        <p className="my-3 max-w-2xl text-base font-medium">
                            Instant multiplayer chess. Jump into a room, share a
                            code, and make your move.
                        </p>
                    </div>
                    <div className="bg-background mt-16 aspect-video w-full rounded-3xl"></div>
                </div>
                <div className="absolute -bottom-24 left-1/2 -z-10 h-96 w-full -translate-x-1/2 rounded-full bg-neutral-600/40 blur-[120px]" />{' '}
                <div className="mid:from-neutral-600/70 absolute -bottom-24 left-1/2 -z-10 h-96 w-full -translate-x-1/2 bg-linear-to-t from-neutral-600/10 to-transparent" />{' '}
            </section>
            {/* Need to decide what to add */}
            <section className="bg-background mx-auto h-screen w-full max-w-7xl"></section>
        </Layout>
    );
}
