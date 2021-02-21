<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        \App\Models\Category::create(['name' => 'Restaurants']);
        \App\Models\Category::create(['name' => 'Entertainment']);
        \App\Models\Category::create(['name' => 'Bills']);

        \App\Models\Ledger::factory(10)->create();
        \App\Models\Transaction::factory(15)->create();
    }
}
