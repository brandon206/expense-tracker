<?php

namespace Database\Factories;

use App\Models\Transaction;
use Illuminate\Database\Eloquent\Factories\Factory;

class TransactionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Transaction::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'category_id' => random_int(1, 3),
            'ledger_id' => random_int(1, 10),
            'amount' => $this->faker->randomFloat(2, 0, 10000),
            'description' => $this->faker->sentence(3),
            'is_repeating' => $this->faker->boolean(50),
            'status' => $this->faker->randomElement(array ('created','deleted')),
        ];
    }
}
