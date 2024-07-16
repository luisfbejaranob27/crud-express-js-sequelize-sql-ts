export interface UseCaseConfig {
	findAllUseCase: () => any
	findByIdUseCase: () => any
	findByEmailUseCase: () => any
	createUseCase: () => any
	updateUseCase: () => any
	deleteUseCase: () => any
}
