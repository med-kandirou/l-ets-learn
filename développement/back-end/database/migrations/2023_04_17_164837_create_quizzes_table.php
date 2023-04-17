<?php

use App\Models\cour;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Formateur;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('quizzes', function (Blueprint $table) {
            $table->id();
            $table->string('Question');
            $table->string('Reponse 1');
            $table->string('Reponse 2');
            $table->string('Reponse 3');
            $table->foreignIdFor(Formateur::class)->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(cour::class)->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quizzes');
    }
};
