using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity {get; set;}
        }
        public class Handler : IRequestHandler<Command>
        {
        public DataContext _context { get; }
            public IMapper _mapper { get; }

            public Handler(DataContext _context, IMapper mapper)
            {
                this._context = _context;
                this._mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Activity.Id);
                _mapper.Map(request.Activity, activity);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}