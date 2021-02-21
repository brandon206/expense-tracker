<?php

namespace Database\Factories;

use App\Models\Ledger;
use Illuminate\Database\Eloquent\Factories\Factory;

class LedgerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Ledger::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'description' => $this->faker->sentence(3),
            'user_id' => random_int(1, 10),
        ];
    }
}
