<?php

use App\Models\Categorie;
use App\Models\Formateur;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cours', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('subtitle');
            $table->string('image');
            $table->string('video');
            $table->text('base');
            $table->text('but');
            $table->float('price');
            $table->foreignIdFor(Formateur::class)->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Categorie::class)->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cours');
    }
};
