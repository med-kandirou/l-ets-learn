<?php

namespace Database\Factories;

use App\Models\Categorie;
use App\Models\Formateur;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cour>
 */
class CourFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->title(),
            'subtitle' => fake()->title(),
            'image' => "https://www.filepicker.io/api/file/IoPHEkBjTC24zD2XxHDW",
            'video' => "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", 
            'base'=>fake()->text(),
            'but' => fake()->text(),
            'price' => fake()->numberBetween(1,1000),
            'formateur_id' => Formateur::factory(),
            'categorie_id' => Categorie::factory()
        ];
    }
}
