import { Star } from 'lucide-react';

const testimonials = [
	{
		id: 1,
		name: 'Tania Mello Briceño',
		company: 'Brimell Spa',
		content:
			'Comencé con ellos desde 0, cuando no tenía idea de cómo emprender, me han guiado en todo el proceso, desde lo más mínimo, hoy en día mi empresa lleva mucho tiempo en rubro de importación y muy bien asesorada, gracias! Vale la pena !!.',
		rating: 5,
		image:
			'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
		verified: true,
	},
	{
		id: 2,
		name: 'Ruth Sanchez',
		company: 'Multibox Logistics',
		content:
			'Una empresa responsable con personal calificado para cumplir con las necesidades de los usuarios, en mi experiencia los recomiendo, han estado conmigo en todo mi proceso, orientándome y guiándome para mantener mi empresa con éxito. Son los mejores.',
		rating: 5,
		image:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		verified: true,
	},
	{
		id: 3,
		name: 'ANY RC',
		company: 'Empresario',
		content:
			'Excelente empresa contable!! Atención increíble, mi empresa estaba en un hueco antes de conocerlos a ellos 😢 sin duda los mejores de todo chile',
		rating: 5,
		image:
			'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80',
		verified: true,
	},
];

const Testimonials = () => {
	return (
		<section id="testimonials" className="py-16 md:py-20 bg-warm-100 dark:bg-gray-900 scroll-mt-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10 md:mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-warm-900 dark:text-white mb-6">
						Esto es lo que nuestros clientes opinan de nosotros
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="card p-6 md:p-8 hover:shadow-xl transition-all duration-300 relative transform hover:scale-105 hover:-translate-y-2"
						>
							{/* Google Reviews Badge */}
							<div className="absolute top-3 right-3 md:top-4 md:right-4">
								<div className="flex items-center gap-1 bg-primary-100 dark:bg-sage-900/20 px-2 py-1 rounded transition-all duration-300 hover:scale-110">
									<span className="text-primary-600 dark:text-sage-400 font-bold text-xs">
										G
									</span>
									<span className="text-xs text-warm-600 dark:text-gray-400">
										Google
									</span>
								</div>
							</div>

							<div
								className="flex items-center mb-3 md:mb-4"
								aria-label={`Calificación ${testimonial.rating} de 5`}
							>
								{[...Array(testimonial.rating)].map((_, i) => (
									<Star
										key={i}
										className="h-4 w-4 md:h-5 md:w-5 text-sage-400 fill-current transition-transform duration-300 hover:scale-125"
									/>
								))}
							</div>

							<p className="text-warm-700 dark:text-gray-300 mb-6 leading-relaxed text-sm md:text-base transition-colors duration-300">
								{testimonial.content}
							</p>

							<div className="flex items-center">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									width={48}
									height={48}
									loading="lazy"
									className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover mr-3 md:mr-4 transition-transform duration-300 hover:scale-110"
								/>
								<div>
									<h4 className="font-semibold text-warm-900 dark:text-white text-sm md:text-base transition-colors duration-300">
										{testimonial.name}
									</h4>
									<p className="text-xs md:text-sm text-warm-500 dark:text-gray-400 transition-colors duration-300">
										{testimonial.company}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Trust Indicators */}
				<div className="mt-12 md:mt-16 text-center">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
						<div className="text-center transform transition-all duration-300 hover:scale-110">
							<div className="text-2xl md:text-3xl font-bold text-warm-900 dark:text-white transition-colors duration-300">
								+1500
							</div>
							<div className="text-[11px] md:text-sm text-warm-600 dark:text-gray-400 uppercase tracking-wide transition-colors duration-300">
								EMPRESAS CREADAS
							</div>
						</div>
						<div className="text-center transform transition-all duration-300 hover:scale-110">
							<div className="text-2xl md:text-3xl font-bold text-warm-900 dark:text-white transition-colors duration-300">
								+2000
							</div>
							<div className="text-[11px] md:text-sm text-warm-600 dark:text-gray-400 uppercase tracking-wide transition-colors duration-300">
								CLIENTES SATISFECHOS
							</div>
						</div>
						<div className="text-center transform transition-all duration-300 hover:scale-110">
							<div className="text-2xl md:text-3xl font-bold text-warm-900 dark:text-white transition-colors duration-300">
								+850
							</div>
							<div className="text-[11px] md:text-sm text-warm-600 dark:text-gray-400 uppercase tracking-wide transition-colors duration-300">
								OFICINAS VIRTUALES
							</div>
						</div>
						<div className="text-center transform transition-all duration-300 hover:scale-110">
							<div className="text-2xl md:text-3xl font-bold text-warm-900 dark:text-white transition-colors duration-300">
								+1600
							</div>
							<div className="text-[11px] md:text-sm text-warm-600 dark:text-gray-400 uppercase tracking-wide transition-colors duration-300">
								TAZAS DE CAFÉ
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;